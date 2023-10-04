import Paywall from '.';
import './styles.scss';

export default {
	title: 'Components/Paywall',
	tags: ['autodocs'],
	render: ({ ...args }) => {
		const content = {
			ctaText: args.ctaText,
			excerpt: args.excerpt,
			headline: args.headline,
			loginText: args.loginText,
			title: args.title,
			ctaLink: '#',
			loginLink: '#',
			loginIcid: ''
		};

		const paywall = new Paywall({
			type: args.type,
			content: content,
			attributes: { state: args.userType }
		});
		return paywall.paywall;
	},
	argTypes: {
		type: {
			name: 'Paywall type',
			control: 'hidden'
		},
		title: {
			name: 'Title',
			control: 'text'
		},
		headline: {
			name: 'Headline',
			control: 'text'
		},
		excerpt: {
			name: 'Excerpt',
			control: 'text'
		},
		ctaText: {
			name: 'CTA Text',
			control: 'text'
		},
		loginText: {
			name: 'Login Text',
			control: 'text'
		}
	}
};

export const Default = {
	args: {
		type: 'primary-paywall',
		title: 'To continue reading this article ...',
		headline: 'Try The Telegraph free for 1 month',
		excerpt: 'Unlock this article, plus unlimited access to our website and exclusive app with a Digital Subscription. Cancel anytime.',
		ctaText: 'Start your free trial',
		loginText: 'Log in'
	}
};

export const Login = {
	args: {
		type: 'login-paywall',
		title: 'Log in to continue reading...',
		headline: 'Good to see you again',
		excerpt: 'Start making the most of your unlimited subscriber access',
		ctaText: 'Start your free trial',
		loginText: 'Start your free trial'
	}
};