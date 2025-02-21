"use client";
import React, { useEffect, useState, createContext } from "react";
import Web3 from "web3";
import ABI from "./POAPDapp.json";

export const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(null);

  const contractAddress = "0xfF02927eD8c6220655c9db9D1aAa7BbBa4A55985";

  useEffect(() => {
    async function loadWeb3() {
      console.log("Loading Web3...");
      if (window.ethereum) {
        const provider = window.ethereum.providers
          ? window.ethereum.providers.find((p) => p.isMetaMask) ||
            window.ethereum
          : window.ethereum;

        if (!provider.isMetaMask) {
          console.warn("MetaMask is required.");
          return;
        }

        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);
        console.log("Web3 loaded:", web3Instance);
      } else {
        console.warn("MetaMask not detected.");
      }
    }
    loadWeb3();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAccount = localStorage.getItem("account");
      if (storedAccount) {
        setAccount(storedAccount);
        setConnected(true);
        console.log("Stored account found:", storedAccount);
      }
    }
  }, []);

  const switchToLiskTestnet = async () => {
    try {
      console.log("Switching to Lisk Testnet...");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x106a" }],
      });
      return true;
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x106a",
                chainName: "Lisk Sepolia Testnet",
                rpcUrls: ["https://rpc.sepolia-api.lisk.com"],
                blockExplorerUrls: ["https://sepolia-blockscout.lisk.com"],
              },
            ],
          });
          return true;
        } catch (addError) {
          console.error("Error adding Lisk Testnet:", addError);
        }
      } else {
        console.error("Error switching network:", error);
      }
      return false;
    }
  };

  const connectWallet = async () => {
    try {
      console.log("Connecting wallet...");
      if (!window.ethereum) {
        alert("MetaMask is required.");
        return;
      }

      const provider = window.ethereum.providers
        ? window.ethereum.providers.find((p) => p.isMetaMask) || window.ethereum
        : window.ethereum;

      if (!provider.isMetaMask) {
        alert("MetaMask is required. Please disable other wallets.");
        return;
      }

      await provider.request({ method: "eth_requestAccounts" });

      setTimeout(async () => {
        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        if (!accounts.length) {
          alert("No account found.");
          return;
        }

        const currentChainId = await provider.request({
          method: "eth_chainId",
        });

        if (currentChainId !== "0x106a") {
          const switched = await switchToLiskTestnet();
          if (!switched) {
            alert("Please switch to Lisk Testnet (0x106a). ");
            return;
          }
        }

        const instance = new web3Instance.eth.Contract(
          ABI.abi,
          contractAddress
        );
        setContract(instance);
        setAccount(accounts[0]);
        setConnected(true);
        localStorage.setItem("account", accounts[0]);

        console.log("Wallet Connected:", accounts[0]);
        console.log("Contract Instance:", instance);
      }, 1000);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        account,
        connectWallet,
        connected,
        contract,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}