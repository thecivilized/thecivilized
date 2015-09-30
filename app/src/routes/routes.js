'use strict';

/**
 * @module
 * @ngdoc config
 * @desc Routes/States.
 */

module.exports = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        var viewsFolder = 'app/templates/views/';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: viewsFolder + 'folder.html',
                controller: 'PageController as page',
                resolve: {
                    pageData: ['page', '$q', function(page, $q) {
                        return page.getIndex()
                            // .catch(function(reason) {
                            //     return $q.reject(reason);
                            // })
                        ;
                    }]
                }
            })
            .state('folder', {
                url: '/:folder/',
                templateUrl: viewsFolder + 'folder.html',
                controller: 'PageController as page',
                resolve: {
                    pageData: ['page', '$stateParams', '$state', '$q', function(page, $stateParams, $state, $q) {
                        return page.getFolder($stateParams.folder)
                            // .catch(function(reason) {
                            //     //$state.go('index');
                            //     return $q.reject(reason);
                            // })
                        ;
                    }]
                }
            })
            .state('file', {
                url: '/:file',
                templateUrl: viewsFolder + 'file.html',
                controller: 'PageController as page',
                resolve: {
                    pageData: ['page', '$stateParams', '$state', '$q', function(page, $stateParams, $state, $q) {
                        return page.getFile($stateParams.file)
                            // .catch(function(reason) {
                            //     //$state.go('index');
                            //     return $q.reject(reason);
                            // })
                        ;
                    }]
                }
            })
        ;

    }
];
