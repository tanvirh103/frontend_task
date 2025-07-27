import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [new URL("https://cdn.10minuteschool.com/images/**"),new URL("https://s3.ap-southeast-1.amazonaws.com/**")],
}
};

export default nextConfig;
