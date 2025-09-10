const { utils } = require("ethers");
const crypto = require( 'crypto' );

async function main() {
    // const MaticFactory = await ethers.getContractFactory("MetakeySwapFactory");
    // const maticFactory = await MaticFactory.deploy("0x86ab3272a265f901189Fe4EB6154f799CF5998Aa");
    // await maticFactory.deployed();
    // console.log("MaticFactory address: ", maticFactory.address);

    // const MetakeySwapRouter = await ethers.getContractFactory("MetakeySwapRouter");
    // const metakeyswapRouter = await MetakeySwapRouter.deploy("0xcf67C248eD540D5a6CC3c38e742e4E62d90B9783", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");
    // await metakeyswapRouter.deployed();
    // console.log("MetakeySwapRouter address: ", metakeyswapRouter.address);

    const MasterChef = await ethers.getContractFactory("MasterChef");
    const masterChef = await MasterChef.deploy(
        "0xCDAf21b8d0f7c17010626c18C81663f6c38D724c", //mk
        "0x86ab3272a265f901189Fe4EB6154f799CF5998Aa", //feeAddr
        "50000000000000000", //mkPerBlock
        "1000000000" //startBlock
    );
    await masterChef.deployed();
    console.log("MasterChef address: ", masterChef.address);

    // const Multicall = await ethers.getContractFactory("Multicall2");
    // const multicall = await Multicall.deploy();
    // await multicall.deployed();
    // console.log("Multicall address: ", multicall.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });