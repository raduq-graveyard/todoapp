'use strict';

angular.module('todoApp')
    .directive('alertMsg', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                type: '=',
                message: '='
            },
            templateUrl: 'views/alertMessageComponent.html'
        }
    });