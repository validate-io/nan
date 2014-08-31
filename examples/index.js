var isnan = require( './../lib' );

console.log( isnan( NaN ) );
// Returns true

console.log( isnan( 5 ) );
// Returns false