'use strict';

/* global angular */

angular
    .module('civ', [
        'ngRoute',
    ])
        .constant('config', require('./app.conf'))
        .config(require('./routes/routes'))
        .service('showdown', [require('showdown').Converter])
        .service('github', require('./services/github'))
        .service('page', require('./services/page'))
        .controller('MainController', require('./controllers/MainController'))
        .controller('PageController', require('./controllers/PageController'))
;


/// automatically handle tree navigation
// parse paths What_is_that -> What is that
// page lists all links
// if folder, list folder's links
// if .md file, list file's contents
// all cached as whole tree object/routes objet