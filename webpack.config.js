const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    //全てのファイルの基準となる。デフォルトはindex.js
    entry: { app:'./src/app.js'},
    output: {
        //デフォルトはmain.jsがバンドルされたファイル
        //どこにバンドルファイルを作るのかをpathで指定
        path:path.resolve(__dirname, './dist'),
        filename: 'main.js',
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
                use:[
                        {
                            loader: 'file-loader',
                            options: {
                                name : '[name].[ext]',
                                outputPath: 'images',
                                pubulicPath: 'images'
                         },
                     },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
