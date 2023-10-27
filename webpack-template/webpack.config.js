const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postCssConfig = require("./src/js/postcss.config")


module.exports = {
    entry: {
        app: './src/index.js'

    } ,
    output: {
        filename: '[name].js' ,
        path: path.resolve(__dirname , './dist') ,
        publicPath: '/dist'
    } ,
    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: '/node_modules/' ,
                use: {
                    loader: 'babel-loader' ,
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: [/\.css$/, /\.scss$/],
                use: [
                    "style-loader",
                    {
                        loader:  MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: postCssConfig
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}