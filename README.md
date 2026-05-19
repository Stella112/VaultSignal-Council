# VaultSignal Council

**A six-agent Universal Alpha Credit System for OKX Agentic Wallet.**

VaultSignal Council turns any token signal into a risk-scored, on-chain verified decision before Agentic Wallet is allowed to trade. It is built for the Agentic Wallet Trading Contest Skill Quality Award: OnchainOS-first, auditable, safety-forward, and already tested with a live X Layer trade.

> Bring any alpha. VaultSignal decides if it deserves capital.

## One-Line Pitch

VaultSignal Council uses six specialized agents to transform token signals into a **Trade Credit Report**, **Scam Receipt**, and **Agent Accountability Ledger** using OnchainOS smart-money, security, market, swap-route, and wallet checks.

## Why This Exists

Most trading bots ask one shallow question:

```text
Can I buy this token?
```

VaultSignal asks the better question:

```text
Does this trade deserve capital, and can the wallet safely exit if wrong?
```

That shift is the project. VaultSignal is not a blind copy-trader, meme sniper, or generic swap prompt. It is a multi-agent trading council where every agent has a specific job, every decision is scored, and every accepted or rejected trade leaves an audit trail.

## What Makes It Different

- **Universal alpha intake**: accepts token signals from user prompts, contract addresses, trending lists, smart-money flows, Telegram/X/KOL mentions, new-token scans, and narrative spikes.
- **Six-agent council**: separates discovery, smart-money validation, scam defense, market quality, exit liquidity, and wallet risk.
- **Exit-first trading**: simulates exit quality before entry. If the wallet cannot get out, it does not go in.
- **Scam receipts**: rejected tokens produce useful evidence instead of silence.
- **Agent Accountability Ledger**: records each agent's claim, evidence, and review trigger.
- **OnchainOS-first**: every core data and transaction action depends on OnchainOS skills/tools.
- **Live proof included**: a real X Layer test trade is documented in this repo.

## Repository Proof

Live test report:

[reports/vaultsignal-test-run-2026-05-20.md](reports/vaultsignal-test-run-2026-05-20.md)

Submission brief:

[SUBMISSION.md](SUBMISSION.md)

Core skill:

[SKILL.md](SKILL.md)

## Live Test Evidence

VaultSignal Council was tested with a tiny X Layer Agentic Wallet trade.

```text
Trade: 0.01 OKB -> XDOG
Chain: X Layer
Token: XDOG
Contract: 0x0cc24c51bf89c00c5affbfcf5e856c25ecbdb48e
Tx: 0x8eda1aff5562e9c2933a47f448ca3a8931fb96b4e1dad7121ef008dc593c5bc9
Received: 193.313303886775171023 XDOG
VaultSignal Score: 86/100
Decision: ENTER_REDUCED_TEST
```

The test used these OnchainOS checks:

- X Layer hot-token scan
- Smart-money signal scan
- Token security scan
- Advanced token risk metadata
- Market/liquidity data
- Holder cluster overview
- Entry quote
- Exit quote
- Agentic Wallet swap execution

Final read-only sanity check after the trade confirmed:

```text
Competition registration: active
XDOG security scan: no risk items returned
Exit route: XDOG -> OKB quoted successfully
Exit price impact: about -0.45%
```

## The Six Agents

| Agent | Weight | Job | OnchainOS sources |
| --- | ---: | --- | --- |
| Alpha Intake Agent | 10 | Converts any signal into verified token candidates. | `okx-dex-trenches`, `okx-dex-token`, user signal |
| Smart Money Agent | 20 | Checks whether quality wallets are buying, holding, or dumping. | `okx-dex-signal`, `okx-dex-token` |
| Shield Agent | 25 | Blocks scams, honeypots, risk level 3+ tokens, fake liquidity, and rug patterns. | `okx-security`, `okx-dex-token` |
| Market Structure Agent | 15 | Scores liquidity, holders, volume, price extension, and market health. | `okx-dex-token`, `okx-dex-market` |
| ExitSense Agent | 20 | Proves the wallet can exit before allowing entry. | `okx-dex-swap`, `okx-dex-token` |
| Vault Risk Agent | 10 | Applies wallet exposure, drawdown, cooldown, and PnL logging rules. | `okx-agentic-wallet`, `okx-dex-market` |

## Universal Trade Credit Score

```text
Universal Trade Credit Score =
  Alpha Quality (0-10)
+ Smart Money Conviction (0-20)
+ Shield Safety (0-25)
+ Market Structure (0-15)
+ Exit Liquidity (0-20)
+ Wallet Risk Fit (0-10)
```

Decision bands:

| Score | Decision |
| ---: | --- |
| 90-100 | Enter normal small position |
| 80-89 | Enter reduced position |
| 70-79 | Watchlist |
| Below 70 | Block |

Hard blocks override the score:

- Security scan blocks or warns at high severity.
- Risk level is 3+ / HIGH / CRITICAL for a buy.
- Exit quote fails.
- Planned exit slippage is above the mode limit.
- Contract identity cannot be verified.
- Stable/native/wrapped-native pair in tournament mode.
- Wallet drawdown pause is active.

## Killer Feature: Agent Accountability Ledger

The Agent Accountability Ledger is the final judging hook.

Every decision records:

- what each agent believed,
- what OnchainOS evidence it used,
- what condition should trigger review later.

Example:

| Agent | Claim | Evidence | Review trigger |
| --- | --- | --- | --- |
| Alpha Intake | Candidate deserves screening. | Hot-token and signal presence. | Signal disappears. |
| Smart Money | Quality wallets support the setup. | Trigger wallets, sold ratio, trader data. | Wallets start dumping. |
| Shield | Safe enough for test entry. | Security scan, risk level, token tags. | Risk worsens. |
| Market Structure | Market can absorb small trade. | Liquidity, holders, volume. | Liquidity drops. |
| ExitSense | Exit is viable. | Entry and exit quotes. | Exit quote fails. |
| Vault Risk | Wallet may take tiny risk. | Balance, position size, drawdown. | Exposure or loss cap hit. |

After exit or watchlist expiry, the skill can produce:

```text
Agent Accountability Review
Outcome: <profit|loss|watchlist expired|blocked correctly>
Best Agent: <agent and reason>
Weakest Assumption: <agent and reason>
Rule Adjustment: <one small future change or none>
```

This makes the skill self-reviewing without pretending to guarantee profit.

## Output Types

### Trade Credit Report

Used when a token passes the council.

```text
VaultSignal Council Report
Mode: Tournament
Chain: X Layer
Token: XDOG (...)
Decision: ENTER_REDUCED
Universal Trade Credit Score: 86/100
Agent Scores: ...
Trade Plan: ...
Exit Plan: ...
OnchainOS Tools Used: ...
Agent Accountability Ledger: ...
```

### Scam Receipt

Used when a token fails.

```text
VaultSignal Scam Receipt
Token: <symbol> (<contract>)
Decision: BLOCK
Primary Reason: <reason>
Evidence:
- <risk evidence>
- <liquidity evidence>
- <holder evidence>
Accountability:
- Blocking Agent: <agent>
- Protected From: <risk>
- Recheck Trigger: <condition>
```

## Competition Alignment

VaultSignal Council is designed around the Agentic Wallet Trading Contest requirements:

- Uses Agentic Wallet and OnchainOS as the primary execution environment.
- Supports Solana and X Layer tournament mode.
- Blocks risk level 3+ tokens for buys.
- Ignores stable/native/wrapped-native pairs in tournament logic.
- Logs accepted and rejected decisions for judging.
- Keeps position sizing conservative and explicit.
- Requires user authorization before execution unless automated mode is explicitly enabled.

## Install Base OnchainOS Skills

Install the official OKX skill pack first:

```bash
npx skills add okx/onchainos-skills
```

## Skill Package

```text
VaultSignal-Council/
|-- SKILL.md
|-- README.md
|-- SUBMISSION.md
|-- agents/
|   `-- openai.yaml
|-- references/
|   |-- scoring.md
|   `-- accountability-ledger.md
|-- reports/
|   `-- vaultsignal-test-run-2026-05-20.md
`-- scripts/
    `-- vaultscore.mjs
```

## Quick Score Test

The deterministic helper can reproduce the live test score:

```bash
echo '{"token":"XDOG","chain":"xlayer","mode":"tournament","alpha":8,"smartMoney":16,"shield":24,"market":13,"exit":17,"vault":8,"flags":{}}' | node scripts/vaultscore.mjs
```

Expected:

```json
[
  {
    "token": "XDOG",
    "chain": "xlayer",
    "mode": "tournament",
    "decision": "ENTER_REDUCED",
    "score": 86
  }
]
```

## Example Prompts

```text
Run VaultSignal Council in tournament mode on Solana.
```

```text
Find one smart-money confirmed X Layer opportunity with shield defense. Do not trade until I confirm.
```

```text
Score this token before buying: <contract>
```

```text
This token is trending in a community chat. Create a Scam Receipt before I trade.
```

```text
Review the Agent Accountability Ledger for my last VaultSignal trade.
```

## Safety Statement

This repository does not contain private keys, seed phrases, wallet export data, API keys, or secrets.

The live test was executed through Agentic Wallet and OnchainOS using a tiny controlled position. The project does not promise profit, does not provide investment advice, and treats all on-chain transactions as irreversible.

## Final Submission Description

VaultSignal Council is a six-agent strategy skill for Agentic Wallet. It accepts alpha from any source, verifies it through OnchainOS, and produces a Universal Trade Credit Score before any trade. The six agents cover Alpha Intake, Smart Money, Shield, Market Structure, ExitSense, and Vault Risk. The final output is a Trade Credit Report, Scam Receipt, and Agent Accountability Ledger, making every accepted or rejected trade auditable for judges.

This skill is designed for the Agentic Wallet Trading Competition because it prioritizes Solana/X Layer, blocks risk level 3+ tokens, ignores ineligible native/stable pairs for tournament logic, and records live proof using OnchainOS commands.

## Disclaimer

This skill does not provide investment advice. Crypto trading is risky, and on-chain transactions are irreversible.
