/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['tailwindui.com'],
    },
    webpack(config, options) {
        return config;
    },
};

export default nextConfig;
