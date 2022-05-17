/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("./scripts/deploy.js");

const { ALCHEMY_KEY_RINKEBY, ALCHEMY_KEY_MAINNET, ACCOUNT_PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.3",
   defaultNetwork: "ethereum",
   networks: {
    hardhat: {},
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY_RINKEBY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY_MAINNET}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
  },
};
