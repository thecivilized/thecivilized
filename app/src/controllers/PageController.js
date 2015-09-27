'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc Page controller.
 * @param {Object} $rootScope - ng
 * @param {Object} pageData - resolved page data
 */

module.exports = [
    '$rootScope',
    'pageData',
    function($rootScope, pageData) {
        var vm = this;
        vm.content = pageData;//.content; // TODO
        $rootScope.title = 'title';//pageData.title; // TODO
    }
];
