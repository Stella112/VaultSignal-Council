# VaultSignal Council

VaultSignal Council is a six-agent Universal Alpha Credit System for OKX Agentic Wallet.

It accepts any token signal, verifies it through OnchainOS, blocks scams and weak exits, scores tradeworthiness, and only allows Agentic Wallet to trade when the opportunity earns enough credit.

## Install Base OnchainOS Skills

```bash
npx skills add okx/onchainos-skills
```

## Skill Package

- `SKILL.md` - the main strategy skill.
- `references/scoring.md` - scoring thresholds and hard blocks.
- `scripts/vaultscore.mjs` - optional deterministic score helper.
- `agents/openai.yaml` - UI metadata.

## Core Idea

Most trading bots ask whether a token can be bought. VaultSignal Council asks whether the trade deserves capital and whether the wallet can safely exit before entering.

The six agents are:

1. Alpha Intake Agent
2. Smart Money Agent
3. Shield Agent
4. Market Structure Agent
5. ExitSense Agent
6. Vault Risk Agent

The final output is a Universal Trade Credit Report or a Scam Receipt.

## Killer Feature

**Agent Accountability Ledger**: every decision records what each of the six agents believed, what evidence it used, and what should be reviewed later. This turns the skill from a one-shot signal bot into an auditable trading council.

For accepted trades, the ledger explains why the entry was allowed and how the exit should be monitored. For rejected tokens, it explains which agent blocked the trade and what risk it protected against.

## Example Prompts

```text
Run VaultSignal Council in tournament mode on Solana.
```

```text
Score this X Layer token before buying: <contract>
```

```text
This token is trending in a community chat. Create a Scam Receipt before I trade.
```

```text
Review the Agent Accountability Ledger for my last VaultSignal trade.
```

## Disclaimer

This skill does not provide investment advice. Crypto trading is risky, and on-chain transactions are irreversible.
