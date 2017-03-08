module.exports = {
	entry: {
		'dist/main' : './ServerApp/Server.ts',
		'dist/www/app': './ClientApp/Client.ts'
	},
	output: {
		path: './',
		filename: '[name].js'
	},
	resolve: {
		extensions: [".ts"]
	},
	module: {
		loaders: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	}
};
