const wepack = require("webpack");

module.exports = {
  plugins: [
    new wepack.DefinePlugin({
      $ENV: {
        BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
      },
    }),
  ],
};
