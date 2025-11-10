const hre = require('hardhat');
async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log('Deploying TokenFactory with', deployer.address);
  const Factory = await hre.ethers.getContractFactory('TokenFactory');
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log('TokenFactory deployed to:', factory.address);
}
main().catch(e => { console.error(e); process.exit(1); });
