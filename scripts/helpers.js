const { ethers } = require("ethers");


// Helper method for fetching environment variables from .env
function getEnvVariable(key, defaultValue) {
    if (process.env[key]) {
        return process.env[key];
    }
    if (!defaultValue) {
        throw `${key} is not defined and no default value was provided`;
    }
    return defaultValue;
}

// Helper method for fetching a connection provider to the Ethereum network
function getProvider() {
    return ethers.getDefaultProvider(getEnvVariable("NETWORK", "mainnet"), {
        alchemy: getEnvVariable("NETWORK", "rinkeby") == "rinkeby" 
                    ? getEnvVariable("ALCHEMY_KEY_RINKEBY") 
                    : getEnvVariable("ALCHEMY_KEY_MAINNET"),
    });
}

// Helper method for fetching a wallet account using an environment variable for the PK
function getAccount() {
    return new ethers.Wallet(getEnvVariable("ACCOUNT_PRIVATE_KEY"), getProvider());
}

module.exports = {
    getEnvVariable,
    getProvider,
    getAccount,
}