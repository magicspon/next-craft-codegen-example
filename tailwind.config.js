const plugin = require("tailwindcss/plugin")

const PX_BASE = 16
// const MIN_WIDTH_PX = 320
// const MAX_WIDTH_PX = 1472
/**
 * Convert pixels to rems, or ems.
 *
 * @function px2
 * @param {number} value
 * @param {string} unit - default to rem
 * @return {string}
 */
const px2 = (value, unit = "rem") => `${value / PX_BASE}${unit}`

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	experimental: {
		applyComplexClasses: true,
	},

	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		applyComplexClasses: true,
	},

	theme: {
		capsize: {
			fontMetrics: {
				display: {
					capHeight: 700,
					ascent: 968,
					descent: -215,
					lineGap: 0,
					unitsPerEm: 1000,
				},
				serif: {
					capHeight: 757,
					ascent: 1124,
					descent: -340,
					lineGap: 0,
					unitsPerEm: 1000,
				},
			},
		},

		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.25rem" }],
			base: ["1rem", { lineHeight: "1.5rem" }],
			lg: ["1.125rem", { lineHeight: "1.75rem" }],
			xl: ["1.25rem", { lineHeight: "1.75rem" }],
			"2xl": ["1.5rem", { lineHeight: "2.5rem" }],
			"3xl": ["1.875rem", { lineHeight: "2.5rem" }],
			"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
			"5xl": ["3rem", { lineHeight: "1" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},

		fontFamily: {
			display: [
				"HalenoirCompact-Bold",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ["semplicitapro", "sans-serif"],
		},

		extend: {
			colors: {
				primary: "var(--primary-color)",
				secondary: "var(--secondary-color)",
				accent: "var(--accent-color)",
				hover: "var(--accent-color-hover)",

				back: "var(--back-color)",

				readable: "var(--readable)",
				divide: "var(--divide)",
				red: "var(--red)",
				dark: "var(--dark)",
				light: "var(--light)",
				pale: "var(--pale)",
				grey: "var(--grey)",
				"soft-dark": "#383d4c",
				transparent: `rgba(255, 255, 255, 0)`,

				mist: "#b4d9d5",
				swan: "#d6ebe9",
				coral: "#ea5656",
			},

			height: {
				page: `calc(var(--vh) * 100)`,
			},

			minHeight: {
				page: `calc(var(--vh) * 100)`,
			},

			gridTemplateColumns: {
				w: `minmax(0, 1fr) repeat(4, minmax(0, calc(${
					64 - 1.25 * 5
				}rem / 4))) minmax(0, 1fr)`,
				table: `minmax(12.5em, 1.5fr) repeat(4, 1fr)`,
			},

			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.primary"),
						a: {
							color: theme("colors.accent"),
						},
						"h1, h2, strong, blockquote, ol > li::before, figure figcaption, thead, code":
							{
								color: theme("colors.primary"),
							},
						h2: {
							fontFamily: [...theme("fontFamily.display")].join(","),
						},
						"h3,h4": {
							color: theme("colors.accent"),
							fontFamily: [...theme("fontFamily.display")].join(","),
						},
						code: {
							backgroundColor: theme("colors.accent"),
						},
						"ul > li::before": {
							borderRadius: 0,
							content: `"\\2014"`,
							background: "none",
							fontWeight: 700,
							top: "0!important",
						},
					},
				},
			}),
		},

		screens: {
			xs: px2(400, "em"),
			sm: px2(640, "em"),
			md: px2(768, "em"),
			lg: px2(1024, "em"),
			xl: px2(1200, "em"),
			ie: { raw: `(min-width: 0\\0)` },
			short: { raw: "(max-height: 40.625em)" },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@themosaad/tailwindcss-capsize"),

		plugin(({ addVariant, e }) => {
			addVariant("between", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.${e(`between${separator}${className}`)} > *:not(:last-child)`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("current", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.is-current .${e(`current${separator}${className}`)}`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("child", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) => `.${e(`child${separator}${className}`)} > *`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("on", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`[data-state="true"].${e(`on${separator}${className}`)}`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("group-on", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`[data-state="true"].group .${e(
							`group-on${separator}${className}`
						)}`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("besides", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.${e(
							`besides${separator}${className}`
						)}:not(:only-child):not(:last-child)`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("placeholder-unfocus", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.${e(
							`placeholder-unfocus${separator}${className}`
						)}:placeholder-shown:not(:focus)::placeholder`
				)
			})
		}),

		plugin(({ addVariant, e }) => {
			addVariant("placeholder-visible", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`*:placeholder-shown:not(:focus) ~ .${e(
							`placeholder-visible${separator}${className}`
						)}`
				)
			})
		}),
	],
}
