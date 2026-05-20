# VaultSignal Council Test Run

Date: 2026-05-20  
Mode: Tournament test  
Chain: X Layer  
Wallet: 0xb8c5d4f961237321f18795850f31d611abb99756  
Intent: Demonstrate that VaultSignal Council can score, risk-check, route-check, execute, and audit a tiny Agentic Wallet trade using OnchainOS.

## Candidate

Token: XDOG  
Contract: 0x0cc24c51bf89c00c5affbfcf5e856c25ecbdb48e  
Source: X Layer hot-token scan plus smart-money signal scan

## OnchainOS Checks Used

- `onchainos token hot-tokens --chain xlayer --limit 10`
- `onchainos signal list --chain xlayer --limit 10`
- `onchainos security token-scan --address 0x0cc24c51bf89c00c5affbfcf5e856c25ecbdb48e --chain xlayer`
- `onchainos token advanced-info --address 0x0cc24c51bf89c00c5affbfcf5e856c25ecbdb48e --chain xlayer`
- `onchainos token price-info --address 0x0cc24c51bf89c00c5affbfcf5e856c25ecbdb48e --chain xlayer`
- `onchainos token cluster-overview --address 0x0cc24c51bf89c00c5affbfcf5e856c25ecbdb48e`
- `onchainos swap quote --from OKB --to XDOG --readable-amount 0.01 --chain xlayer`
- `onchainos swap quote --from XDOG --to OKB --readable-amount 190 --chain xlayer`
- `onchainos swap execute --from OKB --to XDOG --readable-amount 0.01 --chain xlayer`

## Evidence

Alpha Intake:
- XDOG appeared in X Layer hot tokens.
- XDOG also appeared repeatedly in smart-money signal results.

Smart Money:
- Multiple smart-money signals were present.
- Trigger wallet counts included 3-4 wallets across recent XDOG signals.
- Sold ratio was materially lower than several rejected candidates that showed 99-100% sold ratios.

Shield:
- Security token scan returned no risk items.
- Advanced token info showed `riskControlLevel: 1`.
- Honeypot flag in quote output was false.
- Token tax rate in quote output was 0.

Market Structure:
- Liquidity: approximately $488,849.
- Holders: 36,037.
- 24h volume: approximately $188,502.
- Top 10 holder percentage: 8.658%.
- Cluster concentration: Low.

ExitSense:
- Entry quote succeeded for 0.01 OKB to XDOG.
- Exit quote succeeded for 190 XDOG back to OKB.
- Entry price impact before execution was acceptable for a tiny test.
- Exit price impact quote was acceptable for a tiny test.

Vault Risk:
- Test position size was intentionally tiny: 0.01 OKB.
- No automated loop was enabled.
- Only one trade was executed for proof-of-flow.

## Execution

Executed swap:

```text
0.01 OKB -> XDOG
```

Broadcast transaction:

```text
0x8eda1aff5562e9c2933a47f448ca3a8931fb96b4e1dad7121ef008dc593c5bc9
```

Received:

```text
193.313303886775171023 XDOG
```

Post-trade wallet snapshot:

```text
OKB: 0.04
XDOG: 193.313303886775171023
Total value: approximately $3.99
```

## VaultSignal Council Report

Decision: ENTER_REDUCED_TEST  
Universal Trade Credit Score: 86/100

Agent Scores:
- Alpha Intake: 8/10 - X Layer hot-token presence plus repeated smart-money signals.
- Smart Money: 16/20 - Multiple wallet signals, but not enough to justify larger sizing.
- Shield Safety: 24/25 - Security scan clean, risk control level 1, no honeypot, no tax.
- Market Structure: 13/15 - Strong liquidity and holders; short-term price was weak, so not full score.
- ExitSense: 17/20 - Entry and exit routes quoted successfully with acceptable tiny-test impact.
- Vault Risk: 8/10 - Position was tiny and controlled; wallet was still very small.

Approved Reasons:
- Token passed security and route checks.
- Trade was small enough for a proof run.
- Exit route was checked before entry.

Reduced Reasons:
- Wallet balance was only about $4.
- Trade was for submission evidence, not a leaderboard attempt.
- XDOG had negative 24h momentum, so position size remained tiny.

Audit Result:
- One tiny test trade executed.
- No continuous trading enabled.
- No profit claim made.

## Agent Accountability Ledger

| Agent | Claim | Evidence | Review trigger |
| --- | --- | --- | --- |
| Alpha Intake | XDOG was worth checking. | X Layer hot-token list plus repeated signal appearances. | Remove from watch if hot-token and signal presence disappear. |
| Smart Money | XDOG had enough smart-money confirmation for a tiny test. | Multiple smart-money signals with 3-4 trigger wallets. | Reduce confidence if sold ratio rises materially or trigger wallets dump. |
| Shield | XDOG was safe enough for a tiny buy test. | Security scan returned no risk items; `riskControlLevel: 1`; honeypot false; tax 0. | Exit or block new buys if risk level worsens or scan returns warnings. |
| Market Structure | Market quality supported a small test. | Liquidity about $488K, 36K holders, low cluster concentration. | Recheck if liquidity drops or holder concentration worsens. |
| ExitSense | The wallet could exit the position. | Entry and exit quotes both succeeded before entry. | Exit or stop new buys if exit quote fails or slippage rises. |
| Vault Risk | The position was acceptable for proof only. | Position size was 0.01 OKB with no automation loop. | Stop trading unless the user explicitly authorizes another test. |

## Agent Accountability Review Plan

At exit or watchlist expiry, review:

```text
Outcome: profit, loss, or proof-only close
Best Agent: the agent whose evidence best predicted the result
Weakest Assumption: the agent whose evidence aged fastest
Rule Adjustment: one small threshold change, or none
```

## Mistake Memory Entry

```text
Trade / Signal: XDOG on X Layer
Outcome: WIN_CONFIRMED
Best Agent: ExitSense - entry and exit quotes both worked before execution and the exit route still quoted after the trade.
Weakest Assumption: Market Structure - XDOG had strong liquidity and holders but weak 24h price momentum.
Rule Adjustment: Keep position size tiny when 24h momentum is negative, even if liquidity and security are strong.
Do Not Change: Shield hard blocks for high-risk tokens remain mandatory.
```

## Notes

This run demonstrates skill executability and auditability for the Skill Quality Award. It is not investment advice and does not imply future profitability.
