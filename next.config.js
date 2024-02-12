/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTRACT_ADDRESS: "0xDf4af839a986E475a47B2E338581339795BC9352",
    ABI: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "_stakeholder",
        "outputs": [
          {
            "internalType": "address",
            "name": "stakeHolder",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "role",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "whitelisted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "unlockedTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_tokenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_tokenSymbol",
            "type": "string"
          }
        ],
        "name": "addOrganization",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "stakeHolder",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "role",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "whitelisted",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "unlockedTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct Vest.Stakeholder",
            "name": "stakeholder",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "orgId",
            "type": "uint256"
          }
        ],
        "name": "addStakeHolder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_orgId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountToWithdraw",
            "type": "uint256"
          }
        ],
        "name": "claimToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "organizationExist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "organizations",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tokenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tokenSymbol",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "admin",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  }
}

module.exports = nextConfig
