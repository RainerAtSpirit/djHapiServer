var Hapi = require('hapi');

var manifest = require('./config.json');

var composer = new Hapi.Composer(manifest);

composer.compose(function( err ) {
    if ( err ) {
        console.log('Failed composing');
    }
});

composer.start();