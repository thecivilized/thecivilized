'use strict';

/**
 * @module
 * @ngdoc routes
 * @desc routes
 * @param $routeProvider {Object} - ng $routeProvider
 */

module.exports = [
    '$routeProvider',
    function($routeProvider) {

        var viewsFolder = 'app/templates/views/';

         $routeProvider
            .when('/*folder/', {
                templateUrl: viewsFolder + 'folder.html',
                controller: 'PageController as page'
            })
             .when('/*file', {
                templateUrl: viewsFolder + 'file.html',
                controller: 'PageController as page'
            })
        ;

    }
];
