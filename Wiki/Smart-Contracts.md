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
