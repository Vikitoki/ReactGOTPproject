// Plugins =================================================================================

const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Add values

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

// Functions =================================================================================

const cssLoaders = (addLoader) => {
  const loader = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, "dist"),
      },
    },

    "css-loader",
  ];

  if (addLoader) {
    loader.push(addLoader);
  }

  return loader;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: "./index.html",
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    ];
  }

  return config;
};

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "source/imgs/webpack-logo.png"),
    //       to: path.resolve(__dirname, "dist"),
    //     },
    //   ],
    // }),
  ];

  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

const babelOptions = (preset) => {
  const obj = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };

  if (preset) {
    obj.presets.push(preset);
  }

  return obj;
};

module.exports = {
  context: path.resolve(__dirname, "source"),
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"],
    alias: {
      "@assets": path.resolve(__dirname, "source/assets"),
      "@": path.resolve(__dirname, "source"),
    },
  },
  entry: {
    main: ["@babel/polyfill", "./index.js"],
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: filename("js"),
  },
  optimization: optimization(),
  plugins: plugins(),
  devServer: {
    historyApiFallback: true,
    port: 4200,
    overlay: true,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions(),
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react"),
        },
      },
      {
        test: /\.(png|jpg|jpeg|ico|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.xml$/,
      //   use: ["xml-loader"],
      // },
      // {
      //   test: /\.csv$/,
      //   use: ["csv-loader"],
      // },
    ],
  },
};
