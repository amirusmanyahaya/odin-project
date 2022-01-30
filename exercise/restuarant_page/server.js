const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleWare(compiler,{publicPath: config.output.publicPath}))


app.listen(3000,() => console.log('Server running on port 3000'))