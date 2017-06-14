const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');

const config = Object.assign({}, baseConfig, {
	output: {
		filename: 'bundle.js',
		path: '/'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, '..', 'assets'),
		port: 9000,
		stats: {
			colors: true
		}
	}
});

module.exports = config;
