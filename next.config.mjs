/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '4kwallpapers.com'
            }
        ]
    }
};

export default nextConfig;

