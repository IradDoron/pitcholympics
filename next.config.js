/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'picsum.photos'],
    },
    webpack(config, { isServer }) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        };

        config.module.rules.push({
            test: /\.mp3$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/_next/sounds/',
                        outputPath: `${isServer ? '../' : ''}sounds/`,
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
