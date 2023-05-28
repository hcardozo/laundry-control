module.exports = {
  packagerConfig: {
    asar: true,
    overwrite: true,
    ignore: [
      "/.angular",
      "/.vscode",
      "/node_modules",
      "/src",
      ".editorconfig",
      ".gitignore",
      "angular.json",
      "forge.config.js",
      "package-lock.json",
      "README.md",
      "tsconfig.app.json",
      "tsconfig.json",
      "tsconfig.spec.json"
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-bitbucket',
      config: {
        repository: {
          owner: 'julianandrescedenomora',
          name: 'front-lavanderia'
        },
        auth: {
          username: process.env.BITBUCKET_USERNAME,
          appPassword: process.env.BITBUCKET_APP_PASSWORD
        },
        replaceExistingFiles: true
      }
    }
  ],
};
