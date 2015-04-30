var ga_config = {
  'v'  : '1',
  'tid': 'UA-XXXXXXXX-Y',
  'an': 'Your App Name',
  'av': '1.0'
};

var ga = function( m, e, c, a, l, v ) {
  
  // set UA and UUID
  this.create = function( a, b, c ) {
    ga_config.tid = a;
    ga_config.cid = b;
    
    if ( typeof c['name'] != 'undefined' ) {
      ga_config.an = c['name'];
    }
    
    if ( typeof c['version'] != 'undefined' ) {
      ga_config.av = c['version'];
    }
  };
  
  this.set = function( n, v ) {
    ga_config[n] = v;
  };
  
  // send tracked page / event
  this.send = function( e, c, a, l, v ) {
    var config = ga_config;
    
    // set type
    config['t'] = e;
    // check for event
    if ( e == 'event' ) {
      config['ec'] = c;
      config['ea'] = a;
      config['el'] = l;
      config['ev'] = v;
    } else {
      // screen / page view
      config['cd'] = c;
    }
    
    // set user-agent
    config['ua'] = navigator.userAgent;
    
    // send data to google
    forge.request.ajax({
      url: 'https://www.google-analytics.com/collect',
      data: config,
      type: 'POST',
      success: function( data ) {
        
      },
      error: function() {
        
      }
    });
    
  };
  
  // call respective function
  this[m]( e, c, a, l, v );
  
};