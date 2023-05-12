require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.17",
	networks: {
		sepolia: {
			url: process.env.VITE_SEPOLIA_RPC_URL,
			accounts: [process.env.VITE_PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: process.env.VITE_ETHERSCAN_API,
	},
}
