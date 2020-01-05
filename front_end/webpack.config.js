const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const os = require('os');
const path = require("path");
const webpack = require("webpack");

const dirname = path.resolve(__dirname, '.');

const prod = process.argv.indexOf("--mode=production") !== -1;
const buildPath = path.resolve(dirname, "dist");
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
        /*
        * Each loader needs an associated Regex test that goes through each
        * of the files you've included (or in this case, all files but the
        * ones in the excluded directories) and finds all files that pass
        * the test. Then it will apply the loader to that file. I haven't
        */

        rules: [
            {
                test: /\.jsx?$/,
                // use: babelLoaderConfig,
                exclude: function (modulePath) {
                    var exclude = modulePath.indexOf(path.sep + 'node_modules' + path.sep) > -1 && modulePath.indexOf(path.sep + 'node_modules' + path.sep + '@technologyone' + path.sep) === -1 && modulePath.indexOf(path.sep + 'react-loadable' + path.sep) === -1;
                    return exclude;
                }
            },
            {
                test: /\.jsx?$/,
                exclude: function (modulePath) {
                    var exclude = modulePath.indexOf(path.sep + 'node_modules' + path.sep + '@technologyone' + path.sep) === -1;
                    return exclude;
                }
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "tslint-loader",
                exclude: /node_modules/,
                options: {
                    failOnHint: true,
                    configuration: require("./tslint.json")
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    babelLoaderConfig,
                    replaceAssetsPathLoaderControl,
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    cssLoaderConfig
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    replaceAssetsPathLoaderControl,
                    cssLoaderConfig,
                    postCssLoaderConfig,
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: !prod,
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    replaceAssetsPathLoaderControl,
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        stats: { children: false },
        contentBase: path.resolve(dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        port: 8080,
        open: true,
        watchContentBase: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        },
        https: true
    }
}