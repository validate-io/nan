/**
*
*	VALIDATE: nan
*
*
*	DESCRIPTION:
*		- Validates if a value is NaN.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: nan( value )
	*	Validates if a value is NaN.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether the value is a NaN
	*/
	function nan( value ) {
		return ( typeof value === 'number' && value !== value );
	} // end FUNCTION nan()


	// EXPORTS //

	module.exports = nan;

})();