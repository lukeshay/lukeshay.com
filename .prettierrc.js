export default {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	overrides: [
		{
			files: ["**/.{yml,yaml}"],
			options: {
				tabWidth: 4,
			},
		},
		{
			files: ["**/package.json"],
			plugins: ["prettier-plugin-packagejson"],
		},
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
	],
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	rangeEnd: Number.POSITIVE_INFINITY,
	rangeStart: 0,
	requirePragma: false,
	semi: true,
	singleAttributePerLine: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	vueIndentScriptAndStyle: false,
};
