const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
	context: __dirname,
	entry: `${src}/index.js`,
	module: {
		rules: [{
			test: /\.js/,
			enforce: 'pre',
			use: [{
				loader: 'remove-flow-types-loader',
			    options: { all: true }
			}],
			include: `${src}`

		}]
	},
	output: {
		path: `${dist}`,
		filename: 'Code.gs'
	},
	plugins: [
		new GasPlugin()
	]
}
