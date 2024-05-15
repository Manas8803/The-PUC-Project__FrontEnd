const dotenv = require("dotenv");
const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	disable: process.env.NODE_ENV === "development",
	workboxOptions: {
		disableDevLogs: true,
	},
});

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA(nextConfig);
