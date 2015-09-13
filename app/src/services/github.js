'use strict';

/**
 * @module
 * @ngdoc service
 * @desc github service
 * @param $scope {Object} - ng $scope
 */

module.exports = [
    'config',
    function(config) {

        this.getFolder = function(url) {
            if (typeof url === 'undefined') {
                url = '';
            }
            return config.apiUrl + url;
        };

        this.getFile = function(url) {
            return config.apiUrl + url;
        };
    }
];
