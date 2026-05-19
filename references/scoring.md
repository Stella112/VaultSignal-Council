# VaultSignal Scoring Reference

Use this reference when scoring candidates or explaining why a score changed.

## Weights

| Category | Max | High score means |
| --- | ---: | --- |
| Alpha Quality | 10 | The signal is fresh, specific, and resolves to a real token. |
| Smart Money Conviction | 20 | Multiple quality wallets are buying or holding, not dumping. |
| Shield Safety | 25 | Security scan passes and token risk is low enough for a buy. |
| Market Structure | 15 | Liquidity, holders, volume, and price structure are tradable. |
| Exit Liquidity | 20 | The agent can quote a realistic exit at acceptable slippage. |
| Wallet Risk Fit | 10 | Position size fits wallet limits and drawdown rules. |

## Hard Blocks

Block even if the score is high when any of these are true:

- Security scan action is `block`.
- Token risk is HIGH/CRITICAL or competition risk level is 3+.
- Exit quote is unavailable.
- Planned exit slippage is above mode limit.
- Contract identity cannot be verified.
- Token is a stable/native/wrapped-native pair in tournament mode.
- Wallet daily drawdown pause has triggered.

## Mode Thresholds

Tournament:

- Enter reduced: 82+
- Watchlist: 70-81
- Block: below 70

Balanced:

- Enter reduced: 80+
- Watchlist: 70-79
- Block: below 70

Aggressive:

- Enter reduced: 74+
- Watchlist: 65-73
- Block: below 65

Aggressive mode never bypasses Shield or ExitSense hard blocks.
