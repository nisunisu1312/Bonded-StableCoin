// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BondedStableCoin is ERC20 {
    address public owner;
    uint256 public reserve;
    uint256 public price = 1 ether;

    constructor() ERC20("Bonded StableCoin", "BSC") {
        owner = msg.sender;
    }

    function mint() public payable {
        require(msg.value > 0, "Send ETH to mint");
        uint256 amount = msg.value / price;
        reserve += msg.value;
        _mint(msg.sender, amount * 1e18);
    }

    function burn(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Not enough balance");
        uint256 ethToReturn = (amount * price) / 1e18;
        reserve -= ethToReturn;
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(ethToReturn);
    }

    receive() external payable {
        mint();
    }
}
