import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import roboPunksNFT from "./RoboPunksNFT.json"

type Props = {
	accounts: string
	setAccounts: (value: any) => void
}

const roboPunksNFTAddress = "0xbC9695302321594E7DaeDc5a974F4562F71C588C"

function MainMint({ accounts, setAccounts }: Props) {
	const [mintAmount, setMintAmount] = useState(1)
	const isConnected = Boolean(accounts[0])

	const handleMint = async () => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			const signer = provider.getSigner()
			const contract = new ethers.Contract(roboPunksNFTAddress, roboPunksNFT.abi, signer)

			try {
				const response = await contract.mint(BigNumber.from(mintAmount))
				console.log("response: ", response)
			} catch (error) {
				console.log("error: ", error)
			}
		}
	}

	const handleDecrement = () => {
		if (mintAmount <= 1) return

		setMintAmount(mintAmount - 1)
	}

	const handleIncrement = () => {
		if (mintAmount >= 3) return

		setMintAmount(mintAmount + 3)
	}

	return (
		<div>
			<h1>RoboPunks</h1>
			<p>
				It's 2078. Can the RoboPunks NFT save humans from the destructive rampant NFT speculation?
				Mint RoboPunks to find out.
			</p>
			{isConnected ? (
				<div>
					<div>
						<button onClick={handleDecrement}>-</button>
						<input
							type="number"
							value={mintAmount}
						/>
						<button onClick={handleIncrement}>+</button>
					</div>
					<button onClick={handleMint}>Mint Now</button>
				</div>
			) : (
				<p>You must be connected to Mint.</p>
			)}
		</div>
	)
}
export default MainMint
