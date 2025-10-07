/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export", // مهم للـ GitHub Pages
  basePath: isProd ? "/shehab-portfolio-v2" : "", // ضع اسم الريبو هنا
  assetPrefix: isProd ? "/shehab-portfolio-v2/" : "",
}

export default nextConfig;
