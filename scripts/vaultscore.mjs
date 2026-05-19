#!/usr/bin/env node

import fs from "node:fs";

const MODES = {
  tournament: { enter: 82, watch: 70 },
  balanced: { enter: 80, watch: 70 },
  aggressive: { enter: 74, watch: 65 },
};

const WEIGHTS = {
  alpha: 10,
  smartMoney: 20,
  shield: 25,
  market: 15,
  exit: 20,
  vault: 10,
};

function clampScore(value, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(max, number));
}

function readInput() {
  const file = process.argv[2];
  const raw = file ? fs.readFileSync(file, "utf8") : fs.readFileSync(0, "utf8");
  if (!raw.trim()) {
    console.error("Usage: node scripts/vaultscore.mjs candidate.json");
    console.error("Or pipe candidate JSON on stdin.");
    process.exit(1);
  }
  return JSON.parse(raw);
}

function hardBlockReason(candidate) {
  const flags = candidate.flags || {};
  if (flags.securityBlock) return "security scan returned block";
  if (flags.highRiskToken) return "token risk is too high for buy";
  if (flags.exitQuoteFailed) return "exit route could not be quoted";
  if (flags.identityUnverified) return "contract identity could not be verified";
  if (flags.ineligibleCompetitionPair) return "pair is not eligible for competition volume";
  if (flags.walletDrawdownPaused) return "wallet drawdown pause is active";
  return "";
}

function score(candidate) {
  const scores = {
    alpha: clampScore(candidate.alpha, WEIGHTS.alpha),
    smartMoney: clampScore(candidate.smartMoney, WEIGHTS.smartMoney),
    shield: clampScore(candidate.shield, WEIGHTS.shield),
    market: clampScore(candidate.market, WEIGHTS.market),
    exit: clampScore(candidate.exit, WEIGHTS.exit),
    vault: clampScore(candidate.vault, WEIGHTS.vault),
  };
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const mode = String(candidate.mode || "balanced").toLowerCase();
  const thresholds = MODES[mode] || MODES.balanced;
  const hardBlock = hardBlockReason(candidate);

  let decision = "BLOCK";
  if (hardBlock) decision = "BLOCK";
  else if (total >= thresholds.enter) decision = total >= 90 ? "ENTER_NORMAL_SMALL" : "ENTER_REDUCED";
  else if (total >= thresholds.watch) decision = "WATCHLIST";

  return {
    token: candidate.token || "",
    chain: candidate.chain || "",
    mode,
    decision,
    score: total,
    scores,
    hardBlock,
  };
}

const input = readInput();
const candidates = Array.isArray(input) ? input : [input];
process.stdout.write(JSON.stringify(candidates.map(score), null, 2) + "\n");
