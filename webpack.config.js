const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const Cross = require('cross-env')
const PATH_ENV = process.env.NODE_ENV
const http = require('./src/uilts/http.js')

function resolve (dir) {
    return path.join(__dirname, dir)
}

let config = {
    mode: PATH_ENV,
    entry: path.join(__dirname,'src/main.js'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader"
            }
        ]
    },
    devServer: {
        port: 3000,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/houselist': {
                target: 'https://m.haozu.com/bj/house-list',
                changeOrigin: true
            },
            '/bj': {
                target: 'https://m.haozu.com',
                changeOrigin: true
            }
        },
        before(app) {
            app.get('/getCity',(req,res)=>{
                if (req.url === '/favicon.ico') {
                    return;
                }
                let data = fs.readFileSync(path.join(__dirname, './src/data/city.json'))
                res.end(data)
            })
            app.get('/getArea',(req,res)=>{
                if (req.url === '/favicon.ico') {
                    return;
                }
                let data = fs.readFileSync(path.join(__dirname, './src/data/area.json'))
                res.end(data)
            })
        }
    },
    resolve:{
        alias: {
            '@': resolve('node_modules'),
            'img':resolve('public')
          },
          extensions: ['.js','.jsx']
    },
    plugins:[
        new ExtractTextWebpackPlugin('common.css'),
        new HtmlWebpackPlugin({
            title: "my first page",
            filename: "index.html",
            template: "./index.html"
        })
    ]
}

if (PATH_ENV=='production') {
    console.log('cc')
}

module.exports = config;