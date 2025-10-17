export default {
    testEnvironment: 'jsdom',
    transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
    extensionsToTreatAsEsm: ['.jsx'], // чтобы jest относился к JSX как к ESM
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',// Игнорируем стили
        '\\.(svg|png|jpg|jpeg|gif|webp|avif)$': '<rootDir>/test/mocks/fileMock.js', // Mock для изображений
        '^.+products\\.json$': '<rootDir>/test/mocks/products.json' // Mock для products.json
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom']
};
