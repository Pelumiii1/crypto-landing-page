import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doge-memes.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
