# VaultSignal Council Submission Brief

## Project

VaultSignal Suite: Universal Alpha Credit + Scam Defense + Mistake Memory

## Repository

https://github.com/Stella112/VaultSignal-Council

## One-Line Pitch

VaultSignal Suite combines two strategy skills under one brand. VaultSignal Council turns token signals into a six-agent Universal Trade Credit Report using OnchainOS smart-money, security, market, swap-route, and wallet checks before Agentic Wallet is allowed to trade. VaultSignal Shield is a standalone read-only scam/rug/liquidity defense skill that creates Scam Receipts without trading. Mistake Memory reviews outcomes and improves future rules.

## Why It Should Win

- **OnchainOS-first**: The strategy depends on OnchainOS for discovery, security, market data, route simulation, wallet state, and execution.
- **Novel**: It combines a six-agent council, standalone Shield skill, Universal Trade Credit Score, Scam Receipts, Accountability Ledger, and Mistake Memory.
- **Safety-forward**: Shield and ExitSense can block trades even when alpha looks attractive.
- **Auditable**: Every decision outputs a Trade Credit Report, Scam Receipt, and Agent Accountability Ledger.
- **Adaptive**: Mistake Memory reviews past outcomes and turns the weakest assumption into one small future rule adjustment.
- **Executable**: A live X Layer test trade was completed and documented in `reports/vaultsignal-test-run-2026-05-20.md`.

## Killer Feature

**Agent Accountability Ledger**

Each of the six agents records:

- its claim,
- the OnchainOS evidence it used,
- the condition that should trigger review.

After exit or watchlist expiry, the skill can review which agent was most useful and which assumption should be adjusted.

## Second Killer Feature

**Mistake Memory Loop**

After every exit, failed quote, blocked signal, or watchlist expiry, VaultSignal compares the original council assumptions against the outcome. It classifies the result as `WIN_CONFIRMED`, `LOSS_CONTAINED`, `EXIT_DEGRADED`, `SHIELD_SAVED`, `FALSE_BLOCK`, or `DATA_INCOMPLETE`, then proposes one small future rule adjustment. It never weakens hard safety blocks.

## Live Test Evidence

Test trade:

```text
0.01 OKB -> XDOG on X Layer
Tx: 0x8eda1aff5562e9c2933a47f448ca3a8931fb96b4e1dad7121ef008dc593c5bc9
```

The test used OnchainOS hot-token scan, smart-money signals, security scan, token metadata, market data, holder cluster overview, entry quote, exit quote, and swap execution.

## Suggested Submission Description

VaultSignal Suite is a two-skill strategy package for Agentic Wallet. VaultSignal Council accepts alpha from any source, verifies it through OnchainOS, and produces a Universal Trade Credit Score before any trade. The six agents cover Alpha Intake, Smart Money, Shield, Market Structure, ExitSense, and Vault Risk. VaultSignal Shield is a standalone read-only scam-defense skill that creates Scam Receipts and Shield Passes without executing trades. The combined output is a Trade Credit Report, Scam Receipt, Agent Accountability Ledger, and Mistake Memory Entry, making every accepted or rejected trade auditable and reviewable for judges.

This skill is designed for the Agentic Wallet Trading Competition because it prioritizes Solana/X Layer, blocks risk level 3+ tokens, ignores ineligible native/stable pairs for tournament logic, and records live proof using OnchainOS commands.
