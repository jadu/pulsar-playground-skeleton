/**
 * Pulsar
 *
 * Core UI components that should always be present.
 *
 * Jadu Ltd.
 */

// Fixes issue with dependencies that expect both $ and jQuery to be set
window.jQuery = window.$ = require('jquery');

require('babel-polyfill');

// Global UI components
var $                     = require('jquery'),
    dropdown              = require('../vendor/jadu/pulsar/js/libs/dropdown'),
    modal                 = require('../vendor/jadu/pulsar/js/libs/modal'),
    tab                   = require('../vendor/jadu/pulsar/js/libs/tab'),
    popover               = require('../vendor/jadu/pulsar/js/libs/popover'),
    tooltip               = require('../vendor/jadu/pulsar/js/libs/tooltip'),
    matchMedia            = require('../vendor/jadu/pulsar/js/polyfills/matchMedia'),
    matchMediaAddListener = require('../vendor/jadu/pulsar/js/polyfills/matchMedia.addListener'),
    
    NavMainComponent      = require('../vendor/jadu/pulsar/js/NavMainComponent');

module.exports = {
    NavMainComponent
};
