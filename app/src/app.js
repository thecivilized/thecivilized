'use strict';

/* global angular */

angular
    .module('civ', [])
        .controller('MainController', require('./controllers/MainController'))
        .service('showdown', [require('showdown').Converter])
;