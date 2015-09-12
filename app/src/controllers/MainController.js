'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc main controller
 * @param $scope {Object} - ng $scope
 */

module.exports = ['$scope', 'showdown', function($scope, showdown) {
    //$scope.abc = 'def';
    var text = '#hello, markdown!';
    $scope.abc = showdown.makeHtml(text);
}];