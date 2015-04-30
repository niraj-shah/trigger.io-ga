# Google Analytics for Trigger.io

This is a basic JavaScript library that will allow you to use Google Analytics tracking in your application. The plugin makes use of two Trigger.io modules, and a bit of basic setup in your application.

## Required Trigger.io Modules

This plugin required:
* ```request``` by Trigger.io (tested with v2.7)
* ```prefs``` by Trigger.io (tested with v2.1)

Please enable these modules from the [Config] > [Modules] section of the Trigger.io Toolkit.

## Setup

To setup the plugin, you first need to include the ```analytics.js``` file from this repo in your code:

```
<script type="text/javascript" src="path/to/analytics.js"></script>
```

Once included, add the following code to your main JavaScript file (e.g. ```main.js```). This will generate and save a Unique Identifier for users of your application to allow accurate tracking.

Remember to add in your own Google Analytics tracking ID (starts with ```UA-```), and update the name (the ```name``` parameter) and version (the ```version``` parameter) of your application in the code below.


```
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
  ga('create', 'UA-XXXXXXXX-Y', uuid, {
    'name': 'My App',
    'version': '1.0'
  } );
});
```

## Tracking

To track screenviews, you need to call the ```ga()``` function as below. The third parameter can be set to the name of your page / view.

```
// send screenview tracking data
ga('send', 'screenview', 'App Load');
```

Tracking events is similar to page views, except you can specify more parameters.</p>

```
// send event
ga('send', 'event', 'category', 'action', 'label', 'value');
```

* The second parameter should be set to ```event```.
* The third parameter (```category```) is the event category (required), for example ```video```, ```button```, ```toggle``` etc.,
* The fourth parameter (```action```) is the type of action that triggered the event (required), for example a ```click```, ```swipe``` etc.
* The fifth parameter (```label```) should be set to the name of the button (required), for example ```Play``` or ```Confirm```
* The sixth parameter (```value```) can be an associated value as a Number (optional), for example it could be used to indicate the number of seconds a video was played for.

## Detailed Documentation

For detailed documentation, please see the included ```Documentation``` folder.