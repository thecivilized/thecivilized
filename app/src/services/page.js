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

        this.getIndex = function() {
            return github.getFolder();
        };

        this.getFolder = function(folder) {
            return github.getFolder(folder);
        };

        this.getFile = function() {
            var md = github.getFile();
            var html = showdown.makeHtml(md);
            return html;
        };
    }
];
