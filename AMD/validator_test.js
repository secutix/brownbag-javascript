var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['validator'],
function   (validator) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.

    console.log(validator.validateMastercardCc('5555555555554444'));
});
