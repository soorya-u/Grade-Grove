/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "belief.soorya-u.dev",
        port: "",
        pathname: "/logo.png",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
};

export default nextConfig;
