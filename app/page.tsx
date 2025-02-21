"use client";
import React, { useContext, useState, useEffect } from "react";
import { Web3Context } from "../ethers/Context";

export default function Home() {
  const { contract, account, connectWallet, connected } = useContext(Web3Context);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!connected) {
      connectWallet();
    }
  }, [connected, connectWallet]);

  const handleClaimPOAP = async () => {
    if (!connected) {
      await connectWallet();
    }
    
    if (!contract) {
      setMessage("Wallet not connected or contract not loaded.");
      return;
    }

    if (!code) {
      setMessage("Please enter a valid code.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const tx = await contract.methods.mint(code).send({ from: account });
      setMessage(`Success! POAP minted. Tx: ${tx.transactionHash}`);
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }

    setLoading(false);
  };

  return (
    <div id="webcrumbs">
      <div className="w-full max-w-[1440px] mx-auto bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen px-4 sm:px-6 lg:px-8">
        <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Collect Proof of Attendance Tokens
            </h2>
            <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto mb-8">
              Commemorate your participation in virtual and real-world events with unique, collectible badges on the blockchain
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your token or code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-purple-400/30 text-white placeholder-purple-200 outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                />
                <button
                  onClick={handleClaimPOAP}
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-1.5 rounded-full hover:bg-purple-400 transition-colors disabled:opacity-50"
                >
                  {loading ? "Claiming..." : "Claim POAP"}
                </button>
              </div>
              {message && (
                <p className="text-center text-white mt-4">{message}</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}