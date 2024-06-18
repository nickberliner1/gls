module.exports = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.js$": "babel-jest",
		"^.+\\.tsx?$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	presets: [
		["@babel/preset-env"],
		"@babel/preset-react",
		"@babel/preset-typescript",
	],
};
