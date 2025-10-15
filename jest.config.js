export default {
    testEnvironment: 'jsdom',
    transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/fileMock.js'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom']
};
