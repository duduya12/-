const hre = require('hardhat');
async function main() {
  const factoryAddress = process.env.FACTORY_ADDRESS;
  if(!factoryAddress) throw new Error('Please set FACTORY_ADDRESS env var to a deployed TokenFactory');
  const [deployer] = await hre.ethers.getSigners();
  const Factory = await hre.ethers.getContractFactory('TokenFactory');
  const factory = Factory.attach(factoryAddress);
  const tx = await factory.createToken('DemoToken','DMT', hre.ethers.utils.parseUnits('1000000',18));
  const receipt = await tx.wait();
  console.log('Token creation tx:', receipt.transactionHash);
  // find TokenCreated event to get token address
  const evt = receipt.events.find(e => e.event === 'TokenCreated');
  if(evt) console.log('Token address:', evt.args.tokenAddress);
}
main().catch(e => { console.error(e); process.exit(1); });
