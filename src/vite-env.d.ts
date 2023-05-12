/// <reference types="vite/client" />
import { ExternalProvider } from "@metamask/providers";

declare global {
  interface Window {
      ethereum: ExternalProvider;
  }
}

interface ImportMetaEnv {
	readonly VITE_SEPOLIA_RPC_URL: string
	readonly VITE_ETHERSCAN_API: string
	readonly VITE_PRIVATE_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
