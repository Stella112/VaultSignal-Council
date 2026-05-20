# VaultSignal Shield Rubric

Use this rubric for standalone Shield scans.

## Score

```text
Shield Score =
  Identity (0-15)
+ Security (0-35)
+ Holder Quality (0-15)
+ Liquidity Quality (0-15)
+ Exit Quality (0-15)
+ Signal Context (0-5)
```

## Hard Blocks

- Security scan action is block.
- Risk level is 3+ / HIGH / CRITICAL for a buy.
- Contract identity cannot be verified.
- Honeypot or sellability risk appears.
- Exit route cannot be quoted.
- Liquidity is too thin for the intended size.

## Output Principle

Rejected tokens are not failures. They are useful evidence. Always explain exactly what the Shield protected the user from.
