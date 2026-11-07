import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        pathname: "/images/P/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/I/**",
      },
      {
        protocol: "https",
        hostname: "www.gosupps.com",
        pathname: "/media/catalog/product/**",
      },
      {
        protocol: "https",
        hostname: "bestcustom.co",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "guteszeug.ch",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/assets/videos/optimized/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/images/posters/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/images/content/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
