/*"use client";

import React, { useEffect, useState, createContext, useContext } from 'react';
import { ethers } from 'ethers';
import abi from './POAPDapp.json';

const WalletContext = createContext(null);
const contractAddress = "0xfF02927eD8c6220655c9db9D1aAa7BbBa4A55985";
const url = 'https://rpc.sepolia-api.lisk.com';

export function WalletProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.JsonRpcProvider(url);
        setProvider(provider);
      }
    };
    initProvider();
  }, []);

  const connectWallet = async () => {
    if (provider) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const account = accounts[0];
        setAccount(account);
        setSigner(signer);
        return { success: true, account };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
    return { success: false, error: 'No provider available' };
  };

  const disconnectWallet = () => {
    setAccount(null);
    setSigner(null);
  };

  const mintPOAP = async (tokenOrCode) => {
    if (signer) {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const tx = await contract.mint(tokenOrCode);
        await tx.wait();
        return { success: true, tx };
      } catch (error) {
        return { success: false, error: error.message };
      }
    } else {
      return { success: false, error: 'No signer available' };
    }
  };

  const value = {
    account,
    provider,
    signer,
    connectWallet,
    disconnectWallet,
    mintPOAP,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}*/