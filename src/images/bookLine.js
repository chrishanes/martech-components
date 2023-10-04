export const bookLine = ( iconClass = false ) => {
	return (
		`<svg ${iconClass ? `class="${iconClass}"` : ''} width="124" height="30" viewBox="0 0 124 30" fill="none" 
			xmlns="http://www.w3.org/2000/svg">
			<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="124" height="30">
				<rect width="124" height="30" fill="#C4C4C4"/>
			</mask>
			<g mask="url(#mask0)">
				<rect width="124" height="30" fill="white"/>
				<path d="M124 18.4999C82.3168 18.4999 109.426 18.4999 85 18.4999C78.0745 18.4999 76.1287 18.3135 72 19.5C66.5 21.0805 62 28 62 28M1.61731e-06 18.4999L39 18.4999C39 18.4999 47.8713 18.3135 52 19.5C57.2197 21 62 28 62 28M62 28L62 5.42021e-06" stroke="#222222"/>
			</g>
		</svg>`
	);
};
