'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc main controller
 * @param $rootScope {Object} - ng $rootScope
 * @param pageData {Object} - resolved page data
 */

module.exports = [
    '$rootScope',
    'pageData',
    function(rootScope, pageData) {
        var vm = this;
        vm.content = pageData.content;
        $rootScope.title = pageData.title;
    }
];
