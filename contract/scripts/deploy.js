const { utils } = require("ethers");
const crypto = require( 'crypto' );

async function main() {
    const MaticFactory = await ethers.getContractFactory("MetakeySwapFactory");
    const maticFactory = await MaticFactory.deploy("0xF451d81c19eC0c76A3d8d417a06dd3FeA5f6bfaf");
    await maticFactory.deployed();
    console.log("MaticFactory address: ", maticFactory.address);

    const MetakeySwapRouter = await ethers.getContractFactory("MetakeySwapRouter");
    const metakeyswapRouter = await MetakeySwapRouter.deploy("0x6f627b6967f196F5AcdB2913cc4B4751350ca1E2", "0x8cbafFD9b658997E7bf87E98FEbF6EA6917166F7");
    await metakeyswapRouter.deployed();
    console.log("MetakeySwapRouter address: ", metakeyswapRouter.address);

    const MasterChef = await ethers.getContractFactory("MasterChef");
    const masterChef = await MasterChef.deploy(
        "0xd9650144Cd028fc70270a26C1D878E5dbeF8CE9A", //mn
        "0xF451d81c19eC0c76A3d8d417a06dd3FeA5f6bfaf", //feeAddr
        "50000000000000000", //mnPerBlock
        "7216360" //startBlock
    );
    await masterChef.deployed();
    console.log("MasterChef address: ", masterChef.address);

    const Multicall = await ethers.getContractFactory("Multicall2");
    const multicall = await Multicall.deploy();
    await multicall.deployed();
    console.log("Multicall address: ", multicall.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });