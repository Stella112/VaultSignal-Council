# Mistake Memory Loop

Use this reference when reviewing a completed trade, a failed route, a blocked signal, or an expired watchlist item.

## Purpose

Mistake Memory lets VaultSignal Council learn operationally from past assumptions. It does not retrain a model. It writes a human-readable memory entry that can tighten future scoring, sizing, timing, or recheck rules.

## Outcome Classes

| Outcome | Meaning |
| --- | --- |
| `WIN_CONFIRMED` | Trade thesis worked and exit remained available. |
| `LOSS_CONTAINED` | Trade lost, but stop/time/risk rules contained damage. |
| `EXIT_DEGRADED` | Entry was possible, but exit quality worsened after entry. |
| `SHIELD_SAVED` | Blocked token later looked risky, illiquid, or unsafe. |
| `FALSE_BLOCK` | Blocked token later improved enough to deserve a recheck. |
| `DATA_INCOMPLETE` | OnchainOS scan or route data was missing, so no-trade was correct. |

## Memory Entry Format

```text
Mistake Memory Entry
Trade / Signal: <token and chain>
Outcome: <outcome class>
Best Agent: <agent and reason>
Weakest Assumption: <agent and assumption>
Rule Adjustment: <one small future change>
Do Not Change: <protected hard rule>
```

## Adjustment Rules

- Make exactly one small adjustment.
- Prefer stricter rules after losses, exit degradation, or incomplete data.
- Do not weaken Shield hard blocks for high-risk buys.
- Add recheck triggers for false blocks instead of bypassing safety.
- Keep all memory entries free of secrets, private keys, API keys, auth tokens, and seed phrases.

## Example

```text
Mistake Memory Entry
Trade / Signal: XDOG on X Layer
Outcome: WIN_CONFIRMED
Best Agent: ExitSense - exit route remained available after entry
Weakest Assumption: Market Structure - 24h momentum was weak
Rule Adjustment: Keep tiny sizing when 24h trend is negative, even if liquidity is strong
Do Not Change: Shield hard blocks remain mandatory
```
