module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		semi: ["error", "always"],
	},
};
