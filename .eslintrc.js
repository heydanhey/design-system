module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ds`
  extends: ["@heydan/eslint-config-ds"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
