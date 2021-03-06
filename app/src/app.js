'use strict';

/* global angular */

// TODO: custom loader or something...
function csvToObject(arr, lang) {
    var obj = {};
    arr.map(function(i) {
        obj[i.key] = i[lang];
    });
    return obj;
}

require('../templates/views/folder.html');
require('../templates/views/file.html');
require('../templates/components/nav.html');

angular
    .module('civ', [
        'ui.router'
    ])
        .constant('config', require('../../config/app'))
        .constant('texts', csvToObject(require('../../content/en/texts.csv'), 'en'))
        .config(require('./routes/routes'))
        .service('showdown', [require('showdown').Converter])
        .service('github', require('./services/github'))
        .service('page', require('./services/page'))
        .controller('MainController', require('./controllers/MainController'))
        .controller('PageController', require('./controllers/PageController'))
        .run(['$rootScope', function($rootScope) {
            $rootScope.$on('$stateChangeError', console.log.bind(console));
        }])
;
