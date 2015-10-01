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
    function($scope, showdown, texts) {
        $scope.title = texts.title;
        $scope.txt = texts;

        $scope.abc = 'def';
        var text = '#hello, markdown!';
        $scope.abc = showdown.makeHtml(text);
    }
];
