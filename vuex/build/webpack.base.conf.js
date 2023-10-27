const path = require('path')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postCssConfig = require(`${PATHS.src}/js/postcss.config`)
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    } ,
    output: {
            filename:  `${PATHS.assets}js/[name].[hash].js`,
        path: path.resolve(__dirname , PATHS.dist) ,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    chunks: 'all',
                    test: /node_modules/,
                    enforce: true
                }
            }
        }
    },
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
                test: /\.vue$/ ,
                exclude: '/node_modules/' ,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loader: {
                            scss: 'vue-style-loader!css-loader!sass-loader'
                        }
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/ ,
                exclude: '/node_modules/' ,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
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
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].[hash].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
                { from: `${PATHS.src}/static`, to: '' },
            ]
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
            inject: false
        }),
        new VueLoaderPlugin()
    ]
}