const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.base = process.env.BASE_URL || config.base;
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@heydan/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/core/"
            ),
          },
        ],
      },
    };
  },
};
