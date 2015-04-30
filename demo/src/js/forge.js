/* ===================================================
 * trigger.io-ga forge.js
 * ===================================================
 * A subset of the Trigger.io functions you can use to test
 * the library in a web browser (without using Trigger.io)
 *
 * Licensed under the GNU GENERAL PUBLIC LICENSE, Version 2.0
 * ========================================================== */

if ( typeof forge == "undefined" ) {
	  
	var forge = { 
    prefs: {
			get: function( name, callback ) {
			  var y = localStorage.getItem( name );
			  
			  try {
			     y = JSON.parse( unescape( y ) );
			     if ( typeof callback != 'undefined' ) {
			       callback( y );
			     }
			     return true;
			  } catch ( e ) {
			     // alert('invalid json');
			  }
			  
				if ( typeof callback != 'undefined' ) {
					callback( unescape( y ) );
				}
				
				return true;
			},
			set: function( name, val, callback ) {
				if ( typeof val == 'object' ) {
				  val = JSON.stringify( value );
				}
				
				localStorage.setItem( name, val );
				
				if ( typeof callback != 'undefined' ) {
					callback();
				}
			}
		},
		request: {
		  ajax: function( data ) {
  		  $.ajax({
  		    url: data.url,
  		    data: data.data,
  		    type: data.type,
  		    success: data.success,
  		    error: data.error
  		  });
  		}
		},
		tools: {
			UUID: function() {
			  return new Date().getTime();
			}
		}
	};
	
}