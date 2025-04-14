import nextPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js'; // ✅ make sure this has the .js extension

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/, /dynamic-css-manifest\.json$/], // ✅ Add this line
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
