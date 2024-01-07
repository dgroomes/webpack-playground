const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-playground/typescript-web',
            template: 'src/index.html'}),
    ],
    module: {
        rules: [{
            test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/,
        }, {
            test: /\.css$/i, use: ["style-loader", "css-loader"],
        },],
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist'), clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // Don't open the server to the whole network. Just bind to loopback address.
        // Use IPV6 (::1) instead of IPV4 (localhost) because the year is 2022.
        host: '::1'
    },
    resolve: {
        extensions: [".ts", ".js"],
    }
};
