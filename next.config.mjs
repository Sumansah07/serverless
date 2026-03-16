/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: true,
        serverActions: {
            allowedOrigins: ['*'],
        },
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'res.cloudinary.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'i.pravatar.cc' },
            { protocol: 'https', hostname: 'api.dicebear.com' },
        ],
    },
};

export default nextConfig;
