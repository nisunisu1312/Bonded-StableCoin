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
