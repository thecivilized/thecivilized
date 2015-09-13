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
                controller: 'PageController as page',
                resolve: {
                    pageData: ['github', '$route', '$location', '$q', function (github, $route, $location, $q) {
                        return github.getFolder($route.current.params.folder)
                            .catch(function (reason) {
                                $location.path('/');
                                return $q.reject(reason);
                            })
                        ;
                    }
                }
            })
            .when('/*file', {
                templateUrl: viewsFolder + 'file.html',
                controller: 'PageController as page',
                resolve: {
                    pageData: ['page', '$route', '$location', '$q', function (page, $route, $location, $q) {
                        return page.getFile($route.current.params.file)
                            .catch(function (reason) {
                                $location.path('/');
                                return $q.reject(reason);
                            })
                        ;
                    }
                }
            })
            .otherwise({
                templateUrl: viewsFolder + 'folder.html',
                controller: 'PageController as page',
                resolve: {
                    pageData: ['page', '$q', function (page, $q) {
                        return page.getFolder()
                            .catch(function (reason) {
                                return $q.reject(reason);
                            })
                        ;
                    }
                }
            })
        ;

    }
];
