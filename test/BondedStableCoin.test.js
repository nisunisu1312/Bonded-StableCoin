const { expect } = require("chai");

describe("BondedStableCoin", function () {
  it("Should mint and burn correctly", async function () {
    const [owner] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("BondedStableCoin");
    const contract = await Contract.deploy();
    await contract.deployed();

    await contract.connect(owner).mint({ value: ethers.utils.parseEther("1") });
    expect(await contract.balanceOf(owner.address)).to.be.gt(0);

    const balanceBefore = await ethers.provider.getBalance(owner.address);
    await contract.connect(owner).burn(ethers.utils.parseEther("1"));
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    expect(balanceAfter).to.be.gt(balanceBefore.sub(ethers.utils.parseEther("1")));
  });
});
