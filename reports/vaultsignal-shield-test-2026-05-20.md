# VaultSignal Shield Test Run

Date: 2026-05-20  
Mode: Shield-only  
Chain: X Layer  
Intent: Demonstrate that VaultSignal Shield can reject a weak token without executing a trade.

## Candidate

Token: A2H  
Contract: 0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b  
Source: X Layer hot-token candidate

## OnchainOS Checks Used

- `onchainos security token-scan --address 0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b --chain xlayer`
- `onchainos token advanced-info --address 0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b --chain xlayer`
- `onchainos token price-info --address 0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b --chain xlayer`
- `onchainos token cluster-overview --address 0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b`
- `onchainos swap quote --from 0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b --to OKB --readable-amount 100000 --chain xlayer`

## Evidence

Identity:
- Token resolved on X Layer.
- Symbol: A2H.

Security:
- Token security scan returned no risk items.
- Advanced info showed `riskControlLevel: 2`.
- Quote output showed honeypot false and tax 0.

Holder Quality:
- Holder count was only 3.
- Cluster overview returned `none snapshot`, meaning holder-cluster evidence was incomplete.

Liquidity Quality:
- Liquidity was approximately $4,594.
- Market cap was approximately $2,157.
- 24h volume was approximately $1,579.
- 24h price change was approximately -16.84%.

Exit Quality:
- A small read-only exit quote succeeded.
- Exit route alone was not enough to pass because holder and liquidity quality were weak.

## VaultSignal Scam Receipt

```text
Token: A2H (0x66dd9dc7732422af682f9f86df6e89d3ea75cf4b)
Chain: X Layer
Decision: BLOCK
Shield Score: 61/100
Primary Blocking Gate: Holder + Liquidity

Evidence:
- Identity: resolved on X Layer
- Security: no direct risk items, but riskControlLevel was 2
- Holders: only 3 holders
- Liquidity: about $4.6K, below Shield quality threshold
- Market: weak 24h trend and tiny market cap
- Exit: quote succeeded, but this did not override poor market quality

Protected From:
- Entering an extremely thin, weak-holder token where exits may degrade quickly under real size.

Recheck Trigger:
- Holder count improves materially, liquidity rises above the Shield threshold, and cluster data becomes available.

Action:
- No trade executed.
```

## Result

VaultSignal Shield worked as intended. It did not treat a clean security scan as enough. It rejected the token because the full safety picture was weak.
