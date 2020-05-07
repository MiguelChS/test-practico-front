module.exports = {
    coverageDirectory: "../coverage",
    globals: {
        "ts-jest": {
            diagnostics: false,
            tsConfig: "./server/tsconfig.json",
        },
    },
    silent: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};