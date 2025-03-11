/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: [
      "vishnusaibhosekar.com",
      "vishnusaibhosekar.com.s3.amazonaws.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
