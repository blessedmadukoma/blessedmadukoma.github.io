/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
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
