const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const os = require('os');
const path = require("path");
const webpack = require("webpack");

const dirname = path.resolve(__dirname, '.');

const prod = process.argv.indexOf("--mode=production") !== -1;
const buildPath = prod ? path.resolve(dirname, "../") : path.resolve(dirname, "dist");
const inDevMode = process.argv.find(v => v.includes('webpack-dev-server')) ? true : false;

var config =
{
    output: {
        filename: "[name]-[hash].js",
        path: buildPath
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".less", ".woff"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html", filename: "index.html" }),
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        // "react": "React",
        //"react-dom": "ReactDOM"
    },
    devServer: {
        stats: { children: false },
        contentBase: path.resolve(dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        port: 8080,
        open: false,
        watchContentBase: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        },
        https: true
    }
}

if (!prod) {
    config.plugins.push(new CleanWebpackPlugin());
}

module.exports = config;
