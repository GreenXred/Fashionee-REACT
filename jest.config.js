export default {
    testEnvironment: "jsdom",
    transform: { "^.+\\.(js|jsx)$": "babel-jest" },
    moduleNameMapper: {
        // глушим стили и ассеты, чтобы Jest не падал на импорт
        "\\.(css|scss)$": "identity-obj-proxy",
        "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/test/mocks/fileMock.js"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
