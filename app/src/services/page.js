'use strict';

/**
 * @module
 * @ngdoc service
 * @desc page service
 * @param github {Object} - service
 * @param showdown {Object} - service
 */

module.exports = [
    'github',
    'showdown',
    function(github, showdown) {

        /** @desc {Object} - all cached promises */
        var cache = {};

        /**
         * @returns {Promise}
         */
        function makeIndexPromise() {
            return github.getFolder().then(function(list) {
                return list;
            });
        }

        /**
         * @returns {Promise}
         */
        function makeFolderPromise(url) {
            return github.getFolder(url).then(function(list) {
                return list;
            });
        }

        /**
         * @returns {Promise}
         */
        function makeFilePromise(url) {
            return github.getFile(url).then(function(md) {
                return showdown.makeHtml(md);
            });
        }

        /**
         * @returns {Promise}
         */
        this.getIndex = function() {
            if (!cache.null) {
                cache.null = makeIndexPromise();
            }
            return cache.null;
        };

        /**
         * @returns {Promise}
         */
        this.getFolder = function(url) {
            if (!cache[url]) {
                cache[url] = makeFolderPromise(url);
            }
            return cache[url];
        };

        /**
         * @returns {Promise}
         */
        this.getFile = function(url) {
            if (!cache[url]) {
                cache[url] = makeFilePromise(url);
            }
            return cache[url];
        };
    }
];
