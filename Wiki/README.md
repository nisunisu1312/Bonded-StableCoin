# Home

# Welcome to the Bonded-StableCoin Wiki 🪙

Bonded-StableCoin is a decentralized stablecoin system leveraging bonding curves for dynamic pricing and minting. It is designed to be fully autonomous, transparent, and backed by reserve logic.

## Core Concepts

- Stablecoin with algorithmic backing
- Bonding curve mechanism
- Smart contracts written in Solidity
- Frontend interaction via ethers.js and React

👉 Explore the sections on the left to learn more.


--------------------------------------------------------------------------------

# Architecture

# System Architecture

## Overview

The Bonded-StableCoin system consists of:

- **Smart Contract** (`BondedStableCoin.sol`) — Handles minting, burning, and bonding logic
- **Frontend** — Connects users via wallet (e.g., MetaMask)
- **Hardhat Backend** — Development & deployment environment

## Components

- ERC-20 token standard
- ETH reserve tracking
- Mint/Burn entry points
- UI hooks (optional integration with DApps)


--------------------------------------------------------------------------------

# Bonding Curves

# Bonding Curve Mechanism

Bonding curves determine token price based on supply.

## Pricing Formula

Currently:
```
Price = 1 ETH per token (flat, can evolve)
```

Future iterations may use:
```
Price = k * (Supply ^ exponent)
```

## Benefits

- Algorithmic control of supply
- Dynamic pricing
- Built-in incentive mechanics


--------------------------------------------------------------------------------

# Smart Contracts

# Smart Contracts

## `BondedStableCoin.sol`

Implements:

- ERC-20 standard
- Mint function (receives ETH)
- Burn function (returns ETH)
- Basic bonding curve logic

## Key Functions

```solidity
function mint() public payable
function burn(uint256 amount) public
```

## Security Considerations

- Reentrancy protection
- Overflow/underflow checks (via Solidity 0.8.x)


--------------------------------------------------------------------------------

# Deployment

# Deployment Guide

## Requirements

- Node.js
- Hardhat
- MetaMask / testnet ETH

## Steps

```bash
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network <your-network>
```

Use a `.env` file for private keys and API keys.


--------------------------------------------------------------------------------

# FAQ

# Frequently Asked Questions

### Q: Is this stablecoin collateral-backed?
A: Yes. ETH reserves back the token supply directly.

### Q: How is price stability ensured?
A: Via bonding curve logic that determines mint/burn pricing algorithmically.

### Q: Can I contribute?
A: Absolutely! Open issues, submit PRs, or suggest improvements.


--------------------------------------------------------------------------------

# Glossary

# Glossary

**Stablecoin** — A token designed to maintain a stable value.

**Bonding Curve** — A mathematical function defining the price of a token based on its supply.

**Minting** — Creating new tokens in exchange for ETH.

**Burning** — Destroying tokens to redeem ETH.

**Reserve** — The ETH pool backing the stablecoin.

**ERC-20** — A widely-used Ethereum token standard.


--------------------------------------------------------------------------------

