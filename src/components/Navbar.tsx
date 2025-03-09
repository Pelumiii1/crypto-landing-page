"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import trustWalletLogo from "../../public/TWT.png";
import coinbaseLogo from "../../public/coinbase.png";
import metamaskLogo from "../../public/metamask-logo.png";
import Spinner from "@/components/spinner";
import { InvestmentOptionsProps, WalletOptionsProps } from "@/types";

const inventmentOptions = ({
  setIsWalletOptions,
  setContent,
}: InvestmentOptionsProps) => {
  const sendAlert = () => {
    setIsWalletOptions(true);
    setContent(false);
  };
  return (
    <ul className="text-left text-lg space-y-5 px-5 overflow-auto">
      <li className="list-disc" onClick={sendAlert}>
        Invest $1200 yields $45,000.00
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $2000 yields $60,000.00
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $2400 yields $90,000,00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $3000 yields $100,000,00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $3600 yields $150,000,00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $4100 yields $200,000,00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $4500 yields $300,000,00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $5100 yields $450,000.00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $5800 yields $500,000.00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $6200 yields $600,000,00.
      </li>
      <li className="list-disc" onClick={sendAlert}>
        Invest $7000 yields $700,000,00.
      </li>
    </ul>
  );
};

const walletOptions = ({ loading, setLoading }: WalletOptionsProps) => {
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Oops! Couldn’t connect to your wallet. Try again later.");
    }, 3000);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col space-y-3 text-white">
          <p className="text-sm mb-5">
            Make sure your wallet has enough balance to complete the
            transaction.
          </p>
          <button
            className="flex items-center bg-gray-900 p-5 py-3 rounded-sm"
            onClick={handleClick}
          >
            <Image
              src={trustWalletLogo}
              alt="Trust Wallet Logo"
              className="w-[32px] h-auto mr-2"
            />
            Trust Wallet
          </button>
          <button
            className="flex items-center bg-gray-900 p-5 py-3 rounded-sm"
            onClick={handleClick}
          >
            <Image
              src={metamaskLogo}
              alt="Metamask Logo"
              className="w-[32px] h-auto mr-2"
            />
            Metamask
          </button>
          <button
            className="flex items-center bg-gray-900 p-5 py-3 rounded-sm"
            onClick={handleClick}
          >
            <Image
              src={coinbaseLogo}
              alt="Coinbase Logo"
              className="w-[32px] h-auto mr-2"
            />
            Coinbase Wallet
          </button>
          {/* <Spinner /> */}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [content, setContent] = useState(false);
  const [isWalletOptions, setIsWalletOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="fixed h-[var(--navbar-height)] flex justify-between items-center w-screen px-5 bg-black"
      style={{
        borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Image src={logo} alt="" className="w-[64px] h-auto" />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger onClick={() => setOpen(true)}>
          <CiMenuBurger color="white" size="1.5rem" />
        </DialogTrigger>
        <DialogContent
          className={`${isWalletOptions ? "bg-black" : "bg-white"} `}
        >
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            {!isWalletOptions && !content && (
              <h1
                className="text-xl font-bold "
                onClick={() => setContent(true)}
              >
                Invest Now
              </h1>
            )}

            {!isWalletOptions && content && (
              <>
                <h1 className="text-xl font-bold">Select Option</h1>
                <p className="text-sm mb-3 font-light">
                  Choose an investment plan that suits you and proceed!
                </p>
                {content &&
                  inventmentOptions({ setIsWalletOptions, setContent })}
              </>
            )}

            {isWalletOptions && walletOptions({ loading, setLoading })}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
