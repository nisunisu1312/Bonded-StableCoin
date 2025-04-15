const hre = require("hardhat");

async function main() {
  const BondedStableCoin = await hre.ethers.getContractFactory("BondedStableCoin");
  const contract = await BondedStableCoin.deploy();
  await contract.deployed();
  console.log("BondedStableCoin deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
