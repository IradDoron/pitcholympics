/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'picsum.photos'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        };
        return config;
    },
};

module.exports = nextConfig;
