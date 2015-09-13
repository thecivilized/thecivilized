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

        this.getFolder = function() {
            return github.getFolder();
        };

        this.getFile = function() {
            var md = github.getFile();
            var html = showdown.makeHtml(md);
            return html;
        };
    }
];
