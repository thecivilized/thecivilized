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

        var lang = 'en'; // TODO lang service
        var baseSubPath =  'content/' + lang + '/book/';
        var baseUrl = config.apiUrl + baseSubPath ;
        var baseUrlRaw = config.apiUrlRaw + baseSubPath;

        /**
         * @returns {Promise}
         */
        function makePromiseFolder(url) {
            return $http.get(baseUrl + url).then(function(response) {
                return response.data;
            });
        }

        /**
         * @returns {Promise}
         */
        function makePromiseFile(url) {
            return $http.get(baseUrlRaw + url + '.md').then(function(response) {
                return response.data;
            });
        }

        /**
         * @returns {string}
         * @example getLabel('00-Introduction.md')
         * // returns "Introduction"
         */
        function getLabel(name) {
            var label = /\d\d\-(\w+)/.exec(name)[1];
            return label;
        }

        /**
         * @returns {string}
         * @example getUrl('content/en/book/01_What_is_the_NAP/00-Introduction.md')
         * // returns "01_What_is_the_NAP/00-Introduction.md"
         */
        function getUrl(path, type) {
            var url = '/' + path.replace(baseSubPath, '').replace('.md', '');
            if (type === 'dir') {
                url += '/';
            }
            return url;
        }

        /**
         * @returns {Promise}
         */
        this.getFolder = function(url) {
            if (typeof url === 'undefined') {
                url = '';
            }
            return makePromiseFolder(url).then(function(data) {

                var list = [],
                    i;

                for (i = 0; i <data.length; i++) {
                    var item = data[i];
                    list.push({
                        label: getLabel(item.name),
                        url: getUrl(item.path, item.type)
                    });
                }

                return list;
            });
        };

        /**
         * @returns {Promise}
         */
        this.getFile = function(url) {
            return makePromiseFile(url);
        };
    }
];
