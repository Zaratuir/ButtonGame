let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let devTool = "inline-source-map";
if(process.env.BUILD_ENV == "production"){
	devTool = "";
}

module.exports = {
	entry:"./src/index.js",
	devtool: devTool,
	devServer:{
		contentBase:"./build",
		open:true,
		historyApiFallback:true
	},
	plugins:[
		new HtmlWebpackPlugin({template:"public/index.html",filename:"index.html"})
	],
	module:{
		loaders:[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			},
			{
				test: /\.css$/,
				loaders: ["style-loader","css-loader"]
			},
			{
				test: /\.png$|\.tiff$|\.gif$|\.jpe?g$|\.svg$|\.ttf$|\.woff2?$|\.eot$/,
				loader:"file-loader"
			}
		],
	},
	output:{
		path: path.resolve(__dirname,"build"),
		filename: "[name].bundle.js",
		publicPath:"/"
	}
}

