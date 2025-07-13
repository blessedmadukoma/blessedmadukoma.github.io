/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/blessedmadukoma" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "blessedmadukoma" : "",
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.simpleicons.org",
      "upload.wikimedia.org",
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
