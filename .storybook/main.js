/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const path = require( 'path' );
const config = {
	stories: [
		'../src/components/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/preset-scss',
		{
			name: '@storybook/addon-styling',
			options: {
				scssBuildRule: {
					test: /.scss$/,
					use: [
						'style-loader', {
							loader: 'css-loader',
							options: {}
						},
						'sass-loader'
					]
				}
			}
		}
	],
	core: { disableTelemetry: true },
	docs: { autodocs: 'tag' },
	framework: {
		name: '@storybook/html-webpack5',
		options: {}
	},
	staticDirs: ['./public', './static'],
	// webpackFinal: async ( config ) => {
	// 	config.resolve.alias = {
	// 		'Components': path.resolve( __dirname, '..', 'Components' ),
	// 		'Data': path.resolve( __dirname, '..', 'src/data' ),
	// 		'Source': path.resolve( __dirname, '..', 'src' ),
	// 		'Utilities': path.resolve( __dirname, '..', 'Utilities' )
	// 	};

	// 	return config;
	// },
	env: ( config ) => ({
		...config,
		environment: 'storybook'
	})
};

export default config;
