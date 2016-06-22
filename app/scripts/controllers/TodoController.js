'use strict';

angular.module('todoApp')
    .controller('TodoController', ['$scope', function ($scope) {

        $scope.type = 'alert-info';
        $scope.message = '';

        $scope.index = 0;
        $scope.todo = {
            description: '',
            updating: false,
            finished: false
        };
        $scope.description = '';

        $scope.todos = [{description: 'Anotação teste 1', finished: false},
            {description: 'Anotação numero 2', finished: false}];

        $scope.alertMessage = function (message, type) {
            $scope.message = message;
            $scope.type = type;
        };

        $scope.clear = function () {
            $scope.todo = {
                description: '',
                updating: false,
                finished: false
            };
        };

        $scope.doUpdate = function () {
            $scope.todos[$scope.index] = $scope.todo;
            $scope.clear();
        };

        $scope.doInsert = function () {
            $scope.todos.push($scope.todo);
            $scope.clear();
        };

        $scope.add = function () {
            if (!$scope.todo.description.length) {
                $scope.alertMessage('A descrição deve ser preenchida !', 'alert-danger');
                return;
            }
            $scope.todo.updating ? $scope.doUpdate() : $scope.doInsert;
        };

        $scope.update = function ($index) {
            $scope.todo = $scope.todos[$index];
            $scope.todo.updating = true;
        };

        $scope.delete = function ($index) {
            $scope.todos.splice($index, 1);
            $scope.alertMessage('Anotação apagada com sucesso.', 'alert-info');
        };

    }]);
