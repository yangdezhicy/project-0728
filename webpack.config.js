const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var values = require('postcss-modules-values');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
			filename: 'main.js',
			path: path.resolve(__dirname, 'dist')
    },
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
							},
						},
						{
							test: /.less$/,
							use: [
								'style-loader',
								{
									loader: 'css-loader',
									options: {
										modules: true,
										importLoaders: 1,
									},
								},
								'less-loader'],
							exclude: /node_modules/,//不需要去转译"node_modules"这里面的文件。
						}
					],
					exclude: /node_modules/,//不需要去转译"node_modules"这里面的文件。
				},
				{
					test: /.less$/,
					use: ['style-loader', 'css-loader', 'less-loader'],
					exclude: /node_modules/,//不需要去转译"node_modules"这里面的文件。
				}
			]
		},
    plugins: [
			new HtmlWebpackPlugin({
					template: path.resolve(__dirname, 'index.html'),
			})
    ],
		devServer: {
			open: true,
			hot: true,
			port: 8080,
			static: './dist',
			historyApiFallback: true
		}
}