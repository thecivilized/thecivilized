'use strict';

/**
 * @module
 * @ngdoc service
 * @desc github service / api client
 * @param $http {Object} - config object
 * @param config {Object} - config object
 */

module.exports = [
    '$http',
    'config',
    function($http, config) {

        function makePromise(url) {
            return $http.get(config.apiUrl + url);
        }

        this.getFolder = function(url) {
            if (typeof url === 'undefined') {
                url = '';
            }
            return makePromise(url).then(function(response) {
                // TODO arrange data here
                //return
            });
        };

        this.getFile = function(url) {
            return makePromise(url);
        };
    }
];
