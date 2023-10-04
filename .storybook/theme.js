import { create } from '@storybook/theming/create';
import logoUrl from './public/logo.png';

export default create({
	base: 'light',
	brandTitle: 'Martech Storybook',
	brandImage: logoUrl,
	brandTarget: '_self'
});
