const path = require("path");

module.exports = {
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",
  
    entry: "./src/ts/main.ts",

    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].js"
    },
    
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
        },
      ],
    },

    resolve: {
      extensions: [".ts", ".js"],
    },

    target: ["web", "es5"],
  };