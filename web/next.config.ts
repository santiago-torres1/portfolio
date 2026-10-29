import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Self-contained server bundle for the container image (see Dockerfile).
  output: "standalone",
  async headers() {
    return [
      {
        // Files in public/ default to max-age=0; let browsers and CloudFront
        // cache them (each deploy invalidates the CloudFront cache).
        source: "/:path*.(svg|png|jpg|jpeg|ico|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
