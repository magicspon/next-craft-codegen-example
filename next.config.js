const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

/**
 * @type {import('next').NextConfig}
 */
module.exports = withBundleAnalyzer({
	images: {
		deviceSizes: [320, 480, 820, 1020],
		domains: [process.env.IMAGE_DOMAIN],
	},

	webpack: (config, options) => {
		config.module = {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /\.svg$/,
					use: ["@svgr/webpack"],
				},
				{
					test: /\.(graphql|gql)$/,
					exclude: /node_modules/,
					loader: "graphql-tag/loader",
				},
			],
		}

		return config
	},

	async redirects() {
		return [
			{
				source:
					"/blog/who-are-capsule-a-q-a-with-founders-tom-wynne-and-liam-green",
				destination: "/blog/who-are-capsule-we-talk-to-the-founders",
				permanent: true,
			},
		]
	},
})
