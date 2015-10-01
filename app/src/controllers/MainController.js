'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc Main controller.
 * @param {Object} $scope - ng
 * @param {Object} texts - texts constant
 */

module.exports = [
    '$scope',
    'showdown',
    'texts',
    'page',
    function($scope, showdown, texts, page) {
        $scope.title = texts.title;
        $scope.txt = texts;

        page.getIndex().then(function(data) {
            $scope.menu = data;
        });

        $scope.abc = 'def';
        var text = '#hello, markdown!';
        $scope.abc = showdown.makeHtml(text);
    }
];
