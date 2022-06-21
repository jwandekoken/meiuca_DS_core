module.exports = {
  stories: ["../src/**/*.stories.mdx","../src/**/**/*.stories.@(js|jsx|ts|tsx)" , "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
  ],
  framework: "@storybook/web-components",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(
      (rule) => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // add your own `my-library`
    webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)my-library(.*)\\.js$`));

    return config;
  },
};
