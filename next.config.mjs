/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bttrgjndzhjamkrzbtys.supabase.co', // 1st part of the images url
				port: '',
				pathname: '/storage/v1/object/public/cabin-images/**', // 2nd part
			},
		],
	},
	// output: 'export',
};

export default nextConfig;
