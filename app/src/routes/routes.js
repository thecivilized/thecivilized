'use strict';

/**
 * @module
 * @ngdoc config
 * @desc Routes/States.
 */

require('../../templates/views/folder.html');
require('../../templates/views/file.html');

module.exports = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/folder.html',
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
                url: '/*folder/',
                templateUrl: 'views/folder.html',
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
                url: '/*file',
                templateUrl: 'views/file.html',
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
