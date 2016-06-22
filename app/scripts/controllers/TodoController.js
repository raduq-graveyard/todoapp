'use strict';

angular.module('todoApp')
    .controller('TodoController', ['$scope', function ($scope) {

        $scope.description = '';

        $scope.todos = [{description: 'Todo numero 1', finished: false},
            {description: 'Todo numero 2', finished: false}];

        this.clear = function () {
            $scope.description = '';
        };

        $scope.add = function () {
            if (!$scope.description.length) {
                //TODO - mensagem de erro
                return;
            }
            $scope.todos.push({description: $scope.description, finished: false});
            clear();
        };

        $scope.delete = function ($index) {
            //mensagem de deletado;
        };

    }]);
