import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import roboPunksNFT from "./RoboPunksNFT.json"
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"

const roboPunksNFTAddress = "0x8efBb606D0467f70DB21208736eb3a1126321658"

type Props = {
	accounts: never[]
	setAccounts: (value: any) => void
}

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

		setMintAmount(mintAmount + 1)
	}

	return (
		<Flex
			justify={"center"}
			align={"center"}
			height={"100vh"}
			paddingBottom={"150px"}
		>
			<Box
				// width={"520px"}
				// backgroundColor={"#333"}
				backdropFilter={"blur(5px)"}
			>
				<div>
					<Text
						fontSize={"48px"}
						textShadow={"0 5px #000000"}
					>
						RoboPunks
					</Text>
					<Text
						fontSize={"30px"}
						letterSpacing={"-5.5%"}
						fontFamily={"VT323"}
						textShadow={"0 2px 2px #000000"}
					>
						It's 2078. Can the RoboPunks NFT save humans from the destructive rampant NFT
						speculation? Mint RoboPunks to find out.
					</Text>
				</div>

				{isConnected ? (
					<div>
						<Flex
							align={"center"}
							justify={"center"}
						>
							<Button
								backgroundColor={"#D6517D"}
								borderRadius={"5px"}
								boxShadow={"0px 2px 2px 1px #0F0F0F"}
								color={"white"}
								cursor={"pointer"}
								fontFamily={"inherit"}
								padding="15px"
								marginTop={"10px"}
								onClick={handleDecrement}
							>
								-
							</Button>
							<Input
								readOnly
                type="number"
								fontFamily={"inherit"}
								width={"100px"}
								height={"40px"}
								textAlign={"center"}
								paddingLeft={"19px"}
								marginTop={"10px"}
								value={mintAmount}
							/>
							<Button
								backgroundColor={"#D6517D"}
								borderRadius={"5px"}
								boxShadow={"0px 2px 2px 1px #0F0F0F"}
								color={"white"}
								cursor={"pointer"}
								fontFamily={"inherit"}
								padding="15px"
								marginTop={"10px"}
								onClick={handleIncrement}
							>
								+
							</Button>
						</Flex>
						<Button
							backgroundColor={"#D6517D"}
							borderRadius={"5px"}
							boxShadow={"0px 2px 2px 1px #0F0F0F"}
							color={"white"}
							cursor={"pointer"}
							fontFamily={"inherit"}
							padding="15px"
							marginTop={"10px"}
							onClick={handleMint}
						>
							Mint Now
						</Button>
					</div>
				) : (
					<Text
						marginTop={"70px"}
						fontSize={"30px"}
						letterSpacing={"-5.5%"}
						fontFamily={"VT323"}
						textShadow={"0 3px #000000"}
						color="#D6517D"
					>
						You must be connected to Mint.
					</Text>
				)}
			</Box>
		</Flex>
	)
}
export default MainMint
