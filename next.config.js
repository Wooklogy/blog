const isDev = process.env.NODE_ENV !== "production";
const repoName = "/blog";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: repoName, // /{repo name}으로 작성하면됩니다. 만약 루트 레포라면 "/"만 작성하시면 됩니다.
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
