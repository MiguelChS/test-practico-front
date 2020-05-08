module.exports = {
    coverageDirectory: "../coverage",
    globals: {
        "ts-jest": {
            diagnostics: false,
            tsConfig: "./server/tsconfig.json",
        },
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};