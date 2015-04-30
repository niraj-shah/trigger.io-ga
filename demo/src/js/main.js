/* ===================================================
 * trigger.io-ga main.js
 * ===================================================
 * What your tracking code should look like, including setup.
 * Includes example of page and event tracking.
 *
 * Licensed under the GNU GENERAL PUBLIC LICENSE, Version 2.0
 * ========================================================== */

// attempt to get uuid
forge.prefs.get( 'uuid', function( uuid ) {
  // if we can't find uuid, generate one
  if ( uuid === null ) {
    // generate UUID
    uuid = forge.tools.UUID();
    // save uuid for future reference
    forge.prefs.set( 'uuid', uuid );
  }
  
  // setup tracker
  ga('create', 'UA-34714827-2', uuid, {
    'name': 'My App',
    'version': '1.0'
  } );
});

// send screenview tracking data
ga('send', 'screenview', 'App Load');

// send event
ga('send', 'event', 'button', 'click', 'value');