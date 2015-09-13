'use strict';

/**
 * @module
 * @ngdoc service
 * @desc github service
 * @param $scope {Object} - ng $scope
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
            return makePromise(url);
        };

        this.getFile = function(url) {
            return makePromise(url);
        };
    }
];
