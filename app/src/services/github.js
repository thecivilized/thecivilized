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
            return $http.get(baseUrl + url);
        }

        /**
         * @returns {Promise}
         */
        function makePromiseFile(url) {
            return $http.get(baseUrlRaw + url + '.md');
        }

        /**
         * @returns {string}
         * @example getLabel('00-Introduction.md')
         * // returns "Introduction"
         */
        function getLabel(name) {
            return /\d\d\-(\w+)/.exec(name)[1];
        }

        /**
         * @returns {string}
         * @example getUrl('content/en/book/01_What_is_the_NAP/00-Introduction.md')
         * // returns "01_What_is_the_NAP/00-Introduction.md"
         */
        function getUrl(path) {
            return path.replace(baseSubPath, '').replace('.md', '');
        }

        /**
         * @returns {Promise}
         */
        this.getFolder = function(url) {
            if (typeof url === 'undefined') {
                url = '';
            }
            return makePromiseFolder(url).then(function(response) {

                var list = [],
                    i;

                for (i = 0; i <response.data.length; i++) {
                    list.push({
                        label: getLabel(response.data[i].name),
                        url: getUrl(response.data[i].path)
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
