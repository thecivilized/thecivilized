'use strict';

/**
 * @module
 * @ngdoc service
 * @desc Github service / api client.
 * @param {Object} $http - ng
 * @param {Object} config - config constant
 */

module.exports = [
    '$http',
    'config',
    function($http, config) {

        var baseUrl = config.apiUrl + 'en' + '/book/';

        function makePromise(url) {
            return $http.get(baseUrl + url);
        }

        this.getFolder = function(url) {
            if (typeof url === 'undefined') {
                url = '';
            }
            return makePromise(url).then(function(response) {
                // TODO arrange data here

                var list = [],
                    i,
                    item;

                for (i = 0; i <response.data.length; i++) {
                    item = {
                        name: response.data[i].name,
                        path: response.data[i].path,
                        fileUrl: response.data[i].download_url,
                        type: response.data[i].type
                    };
                    list.push(item);
                }

                return list;
            });
        };

        this.getFile = function(url) {
            return makePromise(url);
        };
    }
];
