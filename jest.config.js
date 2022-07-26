const config = {
  setupFiles: ["<rootDir>/jestSetup/envExport.js"],
  setupFilesAfterEnv: ["<rootDir>/jestSetup/testSetup.js"],
  globalTeardown: "<rootDir>/jestSetup/teardownJest.js"
}
export default config
