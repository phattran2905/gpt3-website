type Props = {
	accounts: string
	setAccounts: (value: any) => void
}

function Navbar({ accounts, setAccounts }: Props) {
	const isConnected = Boolean(accounts[0])

	const connectAccount = async () => {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			})

			setAccounts(accounts)
		}
	}

	return (
		<div>
			{/* Left side - Social Media Icon */}
			<div>Facebook</div>
			<div>Twitter</div>
			<div>Email</div>

			{/* Right side - Sections and Connect */}
			<div>About</div>
			<div>Mint</div>
			<div>Team</div>

			{/* Connect */}
			{isConnected ? <p>Connected</p> : <button onClick={connectAccount}>Connect</button>}
		</div>
	)
}

export default Navbar
