'use strict';

/* global inject */

describe('MainController', function() {

    beforeEach(module('civ'));

    beforeEach(inject(function($injector) {
        this.$controller = $injector.get('$controller');
        this.$rootScope = $injector.get('$rootScope');
        this.$scope = this.$rootScope.$new();
        this.MainController = this.$controller('MainController', {
            $scope: this.$scope
        });
    }));

    it('should set abc to `def` in $scope', function() {
        expect(this.$scope.abc).toBe('def');
    });
});