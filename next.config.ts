import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "petskindata.blob.core.windows.net",
        port: "",
        pathname: "/user-pet-images/**",
      },
    ],
  },
};

export default nextConfig;
