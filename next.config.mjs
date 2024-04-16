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
    ],
  },
};

export default nextConfig;
