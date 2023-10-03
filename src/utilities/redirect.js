/**
 * Sets the redirectTo parameter value of a given string, but only if the
 * parameter already exists in the string.
 *
 * @examples
 * updateRedirectParam(
 *    'http://www.test.com/?redirectTo=',
 *    'http://www.foo.com'
 * );
 * // 'http://www.test.com/?redirectTo=http%3A%2F%2Fwww.foo.com'
 *
 * @param {string} str        - URL or querystring.
 * @param {string} url        - The parameter value.
 * @return {string}            - The transformed string with the updated value.
 */
const updateRedirectParam = ( str, url ) => {
	const key = 'redirectTo';
	const keyExists = getQuerystringParam( str, key ) !== null;
	return keyExists ? setQuerystringParam( str, key, url ) : str;
};

/**
 * Finds the the value of a querystring parameter in a given string.
 * The querystring provided can be a URL or otherwise it defaults to location.search
 *
 * @example
 * getQuerystringParam('foo', 'http://www.test.com/?foo=bar');
 * // 'bar'
 * getQuerystringParam('?baz=qux', 'qux');
 * // 'qux'
 *
 * @param  {string} key            - The key of the value to return.
 * @param  {string} str            - URL or querystring [default = location.search].
 * @return {string|null}           - The parameter value or null if key not found.
 */
const getQuerystringParam = ( str, key ) => {
	const result = matchParam( key ).exec( str );
	return result && decodeURIComponent( result[2] );
};

/**
 * Sets the value of a querystring parameter in a given string.
 * The string provided can be either a URL, or the querystring itself as
 * returned from location.search. If the parameter does not exist, the
 * key/value pair is added.
 *
 * @example
 * setQuerystringParam('baz', 'qux');
 * // '?baz=qux'
 * setQuerystringParam('http://www.test.com/', 'foo', 'bar');
 * // 'http://www.test.com/?foo=bar'
 * setQuerystringParam('baz', 'qux', '?baz=foo');
 * // '?baz=qux'
 *
 * @param {string} [str]            - URL or querystring [default = location.search].
 * @param {string} key              - The key of the value to update.
 * @param {string} value            - The value to set.
 * @return {string}                 - The transformed string with the updated value.
 */
const setQuerystringParam = ( str, key, value ) => {
	let param;
	let qs;
	let updatedQuerystring;

	if ( typeof str === 'undefined' ) {
		str = document.location.search();
	}

	if ( getQuerystringParam( str, key ) === null ) {
		param = `${key}=${encodeURIComponent( value )}`;
		qs = matchQuerystring.exec( str )[0];
		updatedQuerystring = str.replace( matchQuerystring, ( qs.length ? qs + '&' : '?' ) + param );
	} else {
		updatedQuerystring = str.replace( matchParam( key ), `$1=${encodeURIComponent( value )}` );
	}

	return updatedQuerystring;
};

/**
 * Returns a RegExp that matches a querystring parameter, key, and value.
 * Caches each RegExp it creates for each key matched.
 *
 * @param  {string} key    - The key of the parameter to match.
 * @return {RegExp}       - The RegExp object.
 */
const matchParam = ( () => {
	const cache = {};
	return ( key ) => cache[key] || ( cache[key] = new RegExp( `([?&;]${key}(?=[=&;#]|$))=?([^&;#]*)` ) );
})();

/**
 * Matches the querystring part of a URL or string, or the position at
 * which a querystring should be added to a URL or string.
 *
 * @type {RegExp}
 */
const matchQuerystring = new RegExp( /\?[^#]*|(?=#)|$/ );

/**
 * Method for appending an encoded redirectTo param to a URL.
 * @param {string} url - Final URL containing the redirectTo param
 * @param {string} redirectParam - value of the redirect ( default will be the current location )
 * @example redirect('https://www.telegraph.co.uk', 'http://www.google.com'); --> https://telegraph.co.uk/?redirectTo=http%3A%2F%2Fwww.google.com
 *
 */

export const redirectTo = ( url, redirectParam = document.location.href ) => {
	const origin = url.match( /\?+/g ) ? `${url}&redirectTo=` : `${url.replace( /\/?$/, '/' )}?redirectTo=`;
	return updateRedirectParam( origin, redirectParam );
};
