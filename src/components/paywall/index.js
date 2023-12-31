import { primaryPaywall, loginPaywall } from './_partials/templates';

class Paywall {
	constructor ( config ) {
		this.config = {
			type: 'primary-paywall',
			content: {},
			attributes: {
				channel: '',
				group: '',
				loggedin: false,
				region: '',
				sale: false,
				state: ''
			},
			target: 'main#main-content.container.tpl-article',
			...config
		};
		this.template = this.getPaywallType( this.config.type );
		this.paywall = new DOMParser().parseFromString( this.template( this.config.content, this.config.attributes ), 'text/html' ).body.firstElementChild;
	}

	init () {
		this.config.target.after( this.paywall );
	}

	getPaywallType ( paywallKey ) {
		const paywallTypes = {
			'primary-paywall': primaryPaywall,
			'login-paywall': loginPaywall
		};
		return paywallTypes[paywallKey];
	};
};

export default Paywall;
