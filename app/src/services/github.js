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

        this.getFromUrl = function() {
            return config.apiUrl;
        }
    }
];
