module.exports = {
	mode: 'production',
	entry: {
		'dist/main' : './ServerApp/Server.ts',
		'dist/www/app': './ClientApp/Client.ts'
	},
	output: {
		path: __dirname + '/',
		filename: '[name].js'
	},
	resolve: {
		extensions: [".ts"]
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	}
};
