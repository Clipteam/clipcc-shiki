const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';
const STATIC_PATH = process.env.STATIC_PATH || '/static';

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: "./src/main.jsx",
    stats: 'errors-warnings',
    devServer: {
        port: process.env.PORT || 5704,
        hot: true
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss", ".css"],
        alias: {
            // syntactic sugar
            "@": path.resolve(__dirname, "src"),
        },
        fallback: {}
    },
    module: {
        rules: [{
            test: /\.?jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        ["@babel/preset-react", {runtime: "automatic"}]
                    ],
                },
            },
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader",],
        },
        {
            test: /\.(svg|png|wav|gif|jpg)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'static/assets/',
                publicPath: `${STATIC_PATH}/assets/`
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    ]},
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "node_modules/clipcc-block/media"),
                to: path.resolve(__dirname, "dist/static/assets/blocks-media")
            }]
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new NodePolyfillPlugin() // fixed other clipcc dependencies problem
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
};