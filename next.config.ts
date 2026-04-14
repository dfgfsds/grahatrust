import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
         protocol: "https",
         hostname: "cdn.confident-group.com",
      },
      {
         protocol: "https",
         hostname: "newsilver.com",
      },
      {
         protocol: "https",
         hostname: "d3pxwdeb4y32a1.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.rocketlawyer.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      }
    ],
  },
};

export default nextConfig;
