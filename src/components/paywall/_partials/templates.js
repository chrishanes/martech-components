import { redirectTo } from '../../../utilities/redirect';
import { bookLine } from '../../../images/bookLine';

const conjunction = ( offer ) => /\?.+=.+/.test( offer ) ? `${offer}&` : `${offer}?`;
const extraClassInfo = ( attributes ) => attributes.loggedin ? ` martech-paywall--loggedin` : '';

/**
 * Returns the primary paywall markup.
 *
 * Note: attributes can be used when we AB test different version of templates/designs,
 * when the designs change on sales or when layout alters on different region/channel/state
 *
 * @param {Object} content - the mapped content elements for the markup, produced by BuildData
 * @param {Object} attributes - the user's and activity's data attributes produced via BuildData component
 * @returns {string} with primary paywall's markup
 */
export const primaryPaywall = ( content, attributes ) => {
	return (
		`<section class="martech-paywall ${extraClassInfo( attributes )}" data-test="martech-paywall martech-primary-paywall" data-js="martech-paywall">
			<div class="martech-paywall__paywall-container">
				<header class="martech-paywall__header">
					<h5 class="martech-paywall__main-heading martech-paywall__text-center" data-test="martech-paywall-title">${content.title}</h5>
				</header>
				<main class="martech-paywall__main">
					<div class="martech-paywall__content">
						<h4 class="martech-paywall__headline" data-test="martech-paywall-headline">${content.headline}</h4>
						<p class="martech-paywall__info" data-test="martech-paywall-excerpt">${content.excerpt}</p>
						${cta( content )}
						${offerInfo( content )}
						${terms( content )}
					</div>
				</main>
				${primaryPaywallFooter( content, attributes )}
			</div>
		</section>`
	);
};

/**
 * Returns the login paywall markup.
 *
 * @param {Object} content - the mapped content elements for the markup, produced by BuildData
 * @param {Object} attributes - the user's and activity's data attributes produced via BuildData component
 * @returns {string} with login paywall's markup
 */
export const loginPaywall = ( content, attributes ) => {
	return (
		`<section class="martech-login-paywall ${extraClassInfo( attributes )} site-header__container" data-test="martech-paywall martech-login-paywall" data-js="martech-paywall">
			<h5 class="martech-paywall__title" data-test="martech-paywall-title">${content.title}</h5>
			<div class="martech-paywall__main-section">
				${bookLine( 'martech-paywall__svg' )}
				<div class="martech-paywall__container">
					<h6 class="martech-paywall__headline" data-test="martech-paywall-headline">${content.headline}</h6>
					<p class="martech-paywall__info" data-test="martech-paywall-excerpt">${content.excerpt}</p>
					<a
						class="martech-paywall__cta
						martech-paywall__cta-main"
						data-test="martech-paywall-login-link"
						href="${redirectTo( `${conjunction( content.loginLink )}ICID=${content.loginIcid}` )}">${content.loginText}</a>
				</div>
			</div>
		</section>`
	);
};

/**
 * Returns the bau CTA markup.
 *
 * @param {Object} content - the mapped content elements
 * @returns {string} with bau cta's markup
 */
const cta = ( content ) => {
	return `
		<div
			class="martech-paywall__cta-placeholder"
			data-js="martech-paywall-cta-placeholder"
			data-test="martech-paywall-cta-placeholder">
				
				<div data-js="martech-paywall-subscribe-cta-placeholder" data-test="martech-paywall-subscribe-cta-placeholder"></div>
				
				<div class="martech-paywall__cta-bau-container martech-paywall__cta-container"
				data-js="martech-paywall-cta-bau-container"
				data-test="martech-paywall-cta-bau-container">
					<a class="martech-paywall__cta-bau"
						data-js="martech-paywall-cta-bau"
						data-test="martech-paywall-cta-bau"
						href="${redirectTo( `${conjunction( content.ctaLink )}ICID=${content.ctaIcid}` )}">${content.ctaText}</a>
				</div>
		</div>
	`;
};

/**
 * Returns The offer's info element markup
 *
 * @param {Object} content - the mapped content elements
 * @returns {string} with the offer info markup
 */
const offerInfo = ( content ) => {
	return (
		`<p class="martech-paywall__info martech-paywall__info--small martech-paywall__hidden-item"
			data-js="martech-paywall-offer-info"
			data-test="martech-paywall-offer-info">${content.offerInfo}</p>`
	);
};

/**
 * Returns The terms & conditions markup
 *
 * @param {Object} content - the mapped content elements
 * @returns {string} with T&Cs markup
 */
const terms = ( content ) => {
	return (
		`<p class="martech-paywall__terms martech-paywall__info martech-paywall__info--small martech-paywall__hidden-item"
			data-js="martech-paywall-terms"
			data-test="martech-paywall-terms">${content.terms}</p>`
	);
};

/**
 * Returns the primary paywall's login markup
 *
 * @param {Object} content - the mapped content elements
 * @param {Object} attributes - the user's and activity's data attributes
 * @returns {string} with primary paywall's login footer.
 */
const primaryPaywallFooter = ( content, attributes ) => {
	if ( attributes.loggedin ) return '';

	return (
		`<footer class="martech-paywall__footer">
			<p class="martech-paywall__footer-text"
				data-test="martech-paywall-footer-text">
				Already a subscriber? <a class="martech-paywall__link" data-test="martech-paywall-login-link" href="${redirectTo( `${conjunction( content.loginLink )}ICID=${content.loginIcid}` )}">${content.loginText}</a></p>
		</footer>`
	);
};
