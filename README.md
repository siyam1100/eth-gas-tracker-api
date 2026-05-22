# Ethereum Gas Tracker API

An expert-level backend utility designed to monitor Ethereum mainnet gas prices. This project provides a clean, flat-structure implementation for developers needing to estimate transaction costs before broadcasting smart contract interactions.

## Features
- **Real-time Monitoring:** Fetches Base Fee, Max Priority Fee, and overall gas price.
- **Provider Agnostic:** Easily switch between Alchemy, Infura, or public RPCs.
- **High Efficiency:** Uses Ethers.js v6 for lightweight and secure blockchain communication.
- **Developer Ready:** Zero subdirectories, making it easy to drop into any existing Node.js environment.

## Quick Start
1. Install dependencies: `npm install`
2. Update the RPC URL in `gasTracker.js` (Default is public).
3. Run the script: `node gasTracker.js`

## Dependencies
- ethers (v6.x)
- dotenv
