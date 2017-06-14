const fs = require('fs');
const path = require('path');
const baseConfig = require('./webpack.config.base.js');
const cpy = require('cpy');
const ButternutWebpackPlugin = require('butternut-webpack-plugin').default

cpy(['assets/*'], 'dist').then(() => {
	// OK
}).catch(err => {
	console.error(err);
});

const config = Object.assign({}, baseConfig, {
	plugins: [
		new ButternutWebpackPlugin()
	]
});

module.exports = config;
