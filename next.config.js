module.exports = {
  webpack: (config) => {
    config.resolve.alias["@components"] = `${__dirname}/src/Components`;
    config.resolve.alias["@themes"] = `${__dirname}/src/styles/`;
    config.resolve.alias["@pages"] = `${__dirname}/pages`;
    return config;
  },
  trailingSlash: true,
};