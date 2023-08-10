const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  target: "node", // Để Webpack biết rằng môi trường đích là Node.js
  entry: "./src/index.ts", // Điểm vào của mã nguồn
  output: {
    filename: "bundle.js", // Tên tệp đóng gói
    path: path.resolve(__dirname, "prod"), // Thư mục đầu ra
    clear: true,
  },
  mode: "production",
  externals: [nodeExternals()], // Không đóng gói các module của Node.js
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // Sử dụng Babel để xử lý mã nguồn
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Cho phép import các tệp TypeScript
  },
  // Optimization for production
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};

// Install webpack
// npm install webpack webpack-cli webpack-node-externals --save-dev

// Install babel
// npm install @babel/core @babel/preset-env babel-loader --save-dev
