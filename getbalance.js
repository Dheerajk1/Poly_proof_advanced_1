const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/avengers.sol/avengers.json");

const tokenAddress = "0x5Bbccf24daCe3549B31855F3D77Ce068F43389f4"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x08ac03855bA94a99cf26f4AeC98360E2A439C8ee"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
