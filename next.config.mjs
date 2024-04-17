/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['tailwindui.com', 'via.placeholder.com', 'images.unsplash.com'],
    },
    webpack(config, options) {
        return config;
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    }    
};

export default nextConfig;
