const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "variables.scss";`,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    styledComponents: true,
  },
};
