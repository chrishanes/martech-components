import './style.scss';

const customViewports = {
	xxs: {
		name: 'XX Small',
		styles: {
			width: '320px',
			height: '600px'
		}
	},
	xs: {
		name: 'X Small',
		styles: {
			width: '480px',
			height: '600px'
		}
	},
	s: {
		name: 'Small',
		styles: {
			width: '768px',
			height: '808px'
		}
	},
	m: {
		name: 'Medium',
		styles: {
			width: '1024px',
			height: '700px'
		}
	},
	l: {
		name: 'Large',
		styles: {
			width: '1280px',
			height: '800px'
		}
	},
	xl: {
		name: 'X Large',
		styles: {
			width: '1440px',
			height: '900px'
		}
	}
};

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: {
			default: 'default',
			values: [
				{
					name: 'default',
					value: '#ffffff'
				},
				{
					name: 'dark',
					value: '#222222'
				}
			]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		layout: 'centered',
		viewport: {
			viewports: customViewports,
			defaultViewport: 'm'
		}
	}
};

export default preview;
