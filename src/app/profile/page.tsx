"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Inconsolata } from "next/font/google";
import Image from "next/image";
import logo from "../../../public/logo.png";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

// Transaction interfaces
interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "transfer" | "charges";
  amount: number;
  currency: string;
  date: string;
  status: "completed" | "pending" | "failed";
  address?: string;
  description?: string;
}

interface UserData {
  name: string;
  email: string;
  walletAddress: string;
  joinedDate: string;
  balance: {
    btc: number;
    eth: number;
    usdt: number;
  };
}

function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"portfolio" | "transactions">(
    "portfolio",
  );

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const storedUser = localStorage.getItem("cryptoUser");

      if (!storedUser) {
        router.push("/login");
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser) as UserData;
        setUserData(parsedUser);

        // Generate mock transaction history
        const mockTransactions: Transaction[] = [
          {
            id: "tx3",
            type: "deposit",
            amount: 0.02923077,
            currency: "BTC",
            date: "2025-03-12T10:30:00Z",
            status: "completed",
          },
          {
            id: "tx2",
            type: "deposit",
            amount: 0.00624782,
            currency: "BTC",
            date: "2025-03-09T10:30:00Z",
            status: "completed",
          },
          {
            id: "tx1",
            type: "charges",
            amount: 0.00012,
            currency: "BTC",
            date: "2025-03-09T08:45:00Z",
            status: "completed",
            description: "Platform fee",
          },
        ];

        setTransactions(mockTransactions);
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-var(--navbar-height))] w-full items-center justify-center bg-black p-4">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!userData) {
    return null; // This should not happen as we redirect if no user data
  }

  // Format wallet address to show first and last few characters
  const formatWalletAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Format currency values to 8 decimal places for crypto
  const formatCryptoValue = (value: number) => {
    return value.toFixed(8);
  };

  return (
    <div
      className={`${inconsolata.variable} flex min-h-[calc(100vh-var(--navbar-height))] w-full flex-col bg-black p-4 text-white`}
    >
      {/* Profile Header */}
      <div className="mb-8 rounded-lg border border-gray-800 bg-[#111] p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-400">{userData.email}</p>
            <div className="mt-2 flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-300">Verified Account</span>
            </div>
          </div>

          <div className="rounded-lg border border-gray-700 bg-black p-3">
            <p className="text-sm text-gray-400">Wallet Address</p>
            <div className="flex items-center">
              <p className="mr-2 font-mono">
                {formatWalletAddress(userData.walletAddress)}
              </p>
              <button
                className="rounded bg-gray-800 p-1 text-xs hover:bg-gray-700"
                onClick={() => {
                  navigator.clipboard.writeText(userData.walletAddress);
                  alert("Wallet address copied to clipboard!");
                }}
              >
                Copy
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Member since {userData.joinedDate}
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 flex border-b border-gray-800">
        <button
          className={`mr-4 pb-2 text-sm font-medium ${
            activeTab === "portfolio"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={`mr-4 pb-2 text-sm font-medium ${
            activeTab === "transactions"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("transactions")}
        >
          Transaction History
        </button>
      </div>

      {/* Portfolio Content */}
      {activeTab === "portfolio" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Asset Overview */}
          <div className="rounded-lg border border-gray-800 bg-[#111] p-6">
            <h2 className="mb-4 text-lg font-semibold">Assets Overview</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-md border border-gray-700 bg-black p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    ₿
                  </div>
                  <div>
                    <h3 className="font-medium">Bitcoin</h3>
                    <p className="text-xs text-gray-400">BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {formatCryptoValue(userData.balance.btc)} BTC
                  </p>
                  <p className="text-xs text-gray-400">
                    ≈ ${(userData.balance.btc * 65000).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="mt-[-10px] text-xs text-yellow-500">
                Pending deposit: $4,700 USD required for investment
              </p>

              <div className="flex items-center justify-between rounded-md border border-gray-700 bg-black p-4">
                <div className="flex items-center">
                  <Image src={logo} alt="" className="h-10 w-10 mr-2" />
                  <div>
                    <h3 className="font-medium">Estimated Reward</h3>
                    <p className="text-xs text-gray-400">Dogecoin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">10.76923077 BTC</p>
                  <p className="text-xs text-gray-400">≈ $700,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-md border border-gray-700 bg-black p-4">
                <div className="flex items-center">
                  <Image src={logo} alt="" className="h-10 w-10 mr-2" />
                  <div>
                    <h3 className="font-medium">Accumulated Reward</h3>
                    <p className="text-xs text-gray-400">Dogecoin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">0 BTC</p>
                  <p className="text-xs text-gray-400">≈ $0</p>
                </div>
              </div>
            </div>

            <div className="mt-6 gap-3">
              <button className="rounded border border-gray-600 bg-transparent px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800">
                Withdraw
              </button>
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="rounded-lg border border-gray-800 bg-[#111] p-6">
            <h2 className="mb-4 text-lg font-semibold">Portfolio Statistics</h2>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-md border border-gray-700 bg-black p-4">
                <p className="text-xs text-gray-400">Total Balance</p>
                <p className="text-xl font-bold">
                  ${(userData.balance.btc * 65000).toLocaleString()}
                </p>
              </div>

              <div className="rounded-md border border-gray-700 bg-black p-4">
                <p className="text-xs text-gray-400">24h Change</p>
                <p className="text-xl font-bold text-green-500">+10.4%</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium">Asset Allocation</h3>
              <div className="h-4 w-full overflow-hidden rounded-full bg-gray-700">
                <div className="flex h-full">
                  <div
                    className="bg-orange-500"
                    style={{
                      width: `${
                        ((userData.balance.btc * 65000) /
                          (userData.balance.btc * 65000 +
                            userData.balance.eth * 3500 +
                            userData.balance.usdt)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs">
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>BTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Content */}
      {activeTab === "transactions" && (
        <div className="rounded-lg border border-gray-800 bg-[#111] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Transaction History</h2>
            <select className="rounded border border-gray-700 bg-black px-2 py-1 text-sm text-gray-300">
              <option value="all">All Transactions</option>
              <option value="deposits">Deposits</option>
              <option value="withdrawals">Withdrawals</option>
              <option value="transfers">Transfers</option>
              <option value="charges">Charges</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 text-left text-xs text-gray-400">
                  <th className="pb-3 pr-4">Type</th>
                  <th className="pb-3 pr-4">Amount</th>
                  <th className="pb-3 pr-4">Date</th>
                  <th className="pb-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="text-sm">
                    <td className="py-3 pr-4">
                      <div className="flex items-center">
                        <div
                          className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center ${
                            tx.type === "deposit"
                              ? "bg-green-800 text-green-400"
                              : tx.type === "withdrawal"
                                ? "bg-red-800 text-red-400"
                                : tx.type === "charges"
                                  ? "bg-orange-800 text-orange-400"
                                  : "bg-blue-800 text-blue-400"
                          }`}
                        >
                          {tx.type === "deposit"
                            ? "↓"
                            : tx.type === "withdrawal"
                              ? "↑"
                              : tx.type === "charges"
                                ? "✕"
                                : "↔"}
                        </div>
                        <span className="capitalize">{tx.type}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="font-medium">
                        {tx.type === "withdrawal" || tx.type === "charges"
                          ? "-"
                          : "+"}
                        {tx.amount} {tx.currency}
                      </div>
                      <div className="text-xs text-gray-500">
                        ≈ $
                        {tx.currency === "BTC"
                          ? (tx.amount * 65000).toFixed(2)
                          : tx.currency === "ETH"
                            ? (tx.amount * 3500).toFixed(2)
                            : tx.amount.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      {new Date(tx.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          tx.status === "completed"
                            ? "bg-green-900 text-green-400"
                            : tx.status === "pending"
                              ? "bg-yellow-900 text-yellow-400"
                              : "bg-red-900 text-red-400"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {transactions.length === 0 && (
            <div className="py-10 text-center text-gray-400">
              <p>No transactions found</p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between text-sm">
            <button className="rounded border border-gray-700 bg-black px-3 py-1 hover:bg-gray-800">
              Previous
            </button>
            <span className="text-gray-400">Page 1 of 1</span>
            <button className="rounded border border-gray-700 bg-black px-3 py-1 hover:bg-gray-800">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
