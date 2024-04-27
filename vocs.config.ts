import { defineConfig } from "vocs";

export default defineConfig({
  theme: {
    accentColor: "#D9D9D9",
  },
  baseUrl: "https://docs.variance.space",
  font: {
    google: "Inter",
  },
  iconUrl: {
    light: "/dark.svg",
    dark: "/light.svg",
  },
  logoUrl: {
    light: "/light.svg",
    dark: "/dark.svg",
  },
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  title: "Variance",
  description: "Variance Documentation",
  socials: [
    {
      icon: "github",
      link: "https://github.com/vaariance",
    },
    {
      icon: "x",
      link: "https://twitter.com/vaariance",
    },
  ],
  sidebar: [
    {
      text: "Overview",
      link: "/overview",
    },
    {
      text: "Account Abstraction I",
      link: "/account-abstraction",
    },
    {
      text: "Account Abstraction II",
      link: "/account-abstraction-2",
    },
    {
      text: "Paymasters",
      link: "/paymasters",
    },
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Configuration",
      collapsed: false,
      items: [
        {
          text: "Chains",
          link: "/config/chains",
        },
        {
          text: "Entrypoint Addresses",
          link: "/config/entrypoint-address",
        },
      ],
    },
    {
      text: "Signers",
      collapsed: false,
      items: [
        {
          text: "Passkey Signer",
          link: "/signers/passkey-signer",
        },
        {
          text: "PrivateKey Signer",
          link: "/signers/privatekey-signer",
        },
        {
          text: "Hardware Signer",
          link: "/signers/hardware-signer",
        },
        {
          text: "EOA Wallet",
          link: "/signers/eoawallet",
        },
      ],
    },
    {
      text: "Providers",
      collapsed: false,
      items: [
        {
          text: "RPC service",
          link: "/providers/service",
        },
        {
          text: "Bundler Provider",
          link: "/providers/bundler",
        },
        {
          text: "JSON RPC Provider",
          link: "/providers/jsonrpc",
        },
      ],
    },
    {
      text: "UserOperation Models",
      collapsed: false,
      items: [
        {
          text: "UserOperation",
          link: "/uop/user-operation",
        },
        {
          text: "UserOperationByHash",
          link: "/uop/user-operation-by-hash",
        },
        {
          text: "UserOperationGas",
          link: "/uop/user-operation-gas",
        },
        {
          text: "UserOperationReceipt",
          link: "/uop/user-operation-receipt",
        },
        {
          text: "UserOperationResponse",
          link: "/uop/user-operation-response",
        },
      ],
    },
    {
      text: "Smart Wallet",
      collapsed: false,
      items: [
        {
          text: "Smart Wallet",
          link: "/4337/smart-wallet",
        },
        {
          text: "Accounts",
          collapsed: false,
          items: [
            {
              text: "P56 Account",
              link: "/4337/p256-account",
            },
            {
              text: "Simple Account",
              link: "/4337/simple-account",
            },
            {
              text: "Safe Smart Account",
              link: "/4337/safe",
            },
          ],
        },
        {
          text: "Smart Wallet Factory",
          link: "/4337/smart-wallet-factory",
        },
        {
          text: "Factories",
          collapsed: false,
          items: [
            {
              text: "P56 Account Factory",
              link: "/4337/p256-account-factory",
            },
            {
              text: "Simple Account Factory",
              link: "/4337/simple-account-factory",
            },
            {
              text: "Safe Smart Account Factory",
              link: "/4337/safe-factory",
            },
          ],
        },
      ],
    },
    {
      text: "Plugins & Mixins",
      collapsed: false,
      items: [
        {
          text: "Plugin Manager Mixin",
          link: "/plugins/manager",
        },
        {
          text: "Gas Override Mixin",
          link: "/plugins/gas-overrides",
        },
        {
          text: "Safe 4337 Plugin",
          link: "/plugins/safe-module",
        },
        {
          text: "Paymaster Plugin",
          link: "/plugins/paymaster",
        },
        {
          text: "Contract Plugin",
          link: "/plugins/contract",
        },
      ],
    },
    {
      text: "ABI Snippets",
      link: "/abi-snippets",
    },
    {
      text: "Crypto & Utils",
      collapsed: false,
      items: [
        {
          text: "abi encode/decode",
          link: "/crypto/abi-encode",
        },
        {
          text: "Uint256",
          link: "/crypto/uint256",
        },
        {
          text: "Pack Bigints",
          link: "/packing",
        },
        {
          text: "Hexlify",
          link: "/crypto/hexlify",
        },
        {
          text: "Keccack256",
          link: "/crypto/keccack256",
        },
        {
          text: "arrayify",
          link: "/crypto/arrayify",
        },
        {
          text: "getPublicKeyFromBytes",
          link: "/crypto/getPublicKeyFromBytes",
        },
        {
          text: "getMessagingSignature",
          link: "/crypto/getMessagingSignature",
        },
        {
          text: "sha256Hash",
          link: "/crypto/sha256Hash",
        },
        {
          text: "Base64",
          link: "/crypto/Base64",
        },
        {
          text: "Hex",
          link: "/crypto/hex",
        },

        {
          text: "Logger",
          link: "/logger",
        },
      ],
    },
    {
      text: "Errors",
      collapsed: false,
      items: [
        {
          text: "GasEstimationError",
          link: "/errors/error-gas",
        },
        {
          text: "InvalidBundlerMethod",
          link: "/errors/error-bundler-method",
        },
        {
          text: "InvalidBundlerUrl",
          link: "/errors/error-bundler-url",
        },
        {
          text: "InvalidFactoryAddress",
          link: "/errors/error-factory-address",
        },
        {
          text: "InvalidJsonRpcUrl",
          link: "/errors/error-jsonrpc-url",
        },
        {
          text: "InvalidPaymasterUrl",
          link: "/errors/error-paymaster-url",
        },
        {
          text: "NonceError",
          link: "/errors/error-nonce",
        },
        {
          text: "SendError",
          link: "/errors/error-send-op",
        },
      ],
    },
  ],
});
