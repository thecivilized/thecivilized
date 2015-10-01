'use strict';

/* global angular */

angular
    .module('civ', [
        'ui.router'
    ])
        .constant('config', require('../../config/app'))
        .config(require('./routes/routes'))
        .service('showdown', [require('showdown').Converter])
        .service('github', require('./services/github'))
        .service('page', require('./services/page'))
        .controller('MainController', require('./controllers/MainController'))
        .controller('PageController', require('./controllers/PageController'))
        .run(['$rootScope', function($rootScope) {
            $rootScope.$on("$stateChangeError", console.log.bind(console));
        }])
    ;



/// automatically handle tree navigation
// parse paths What_is_that -> What is that
// page lists all links
// if folder, list folder's links
// if .md file, list file's contents
// all cached as whole tree object/routes objet