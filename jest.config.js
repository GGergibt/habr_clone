const config = {
  setupFiles: ["<rootDir>/jestSetup/envExport.js"],
  // setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
  globalTeardown: "<rootDir>/jestSetup/teardownJest.js"
}
export default config
