const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    //全てのファイルの基準となる。デフォルトはindex.js
    entry: {
        main:'./src/javascripts/main.js'
    },
    output: {
        //デフォルトはmain.jsがバンドルされたファイル
        //どこにバンドルファイルを作るのかをpathで指定
        path:path.resolve(__dirname, './dist'),
        filename: 'javascripts/main.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {
                test:/\.(png|jpe?g|gif|woff2?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
                use:[

                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './stylesheets/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/templets/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
