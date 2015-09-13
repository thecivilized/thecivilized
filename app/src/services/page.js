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

        this.getPage = function() {
            return 'something';
        }
    }
];
