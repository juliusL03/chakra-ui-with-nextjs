import { join } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [join('styles')]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/Portfolio',
				permanent: true
			}
		]
	}
}

export default nextConfig
