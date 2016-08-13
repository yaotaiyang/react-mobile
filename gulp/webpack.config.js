var webpack = require('webpack');
process.env.NODE_ENV = 'production';
module.exports = {
    entry: {
        index: ['./src/index.js'],
        vendors: ['react','react-dom','react-redux','react-router','redux-thunk','redux-logger']
    },
    output: {
        path: __dirname + '/build/js',
        filename: 'bundle.js',
        chunkFilename: "[name].min.js?ver=[chunkhash:8]",
        publicPath: '/js/'
    },
    /* resolve: {
     root: __dirname + '/src/app/',
     },*/
    watch: true,
    module: {
        noParse: [],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/,loader: 'babel'},
            {test: /\.html$/,loader: 'raw'},
            {test:/\.css$/, loader: ["style-loader", "css-loader"]},
            {test: /\.less$/, loader: "style!css!less"}
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),//分离库
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                //drop_console:true,
                //drop_debugger:true
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};
