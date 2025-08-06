/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Increase quality from default 75 to 90 for better image clarity
    quality: 90,

    // Enable modern image formats for better compression and quality
    formats: ["image/webp", "image/avif"],

    // Add SVG support - SVGs will bypass optimization (recommended)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
