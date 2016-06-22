'use strict';

angular.module('todoApp')
    .controller('TodoController', ['$scope', function ($scope) {

        $scope.todos = [ {name: 'TODO 1', description: 'Todo numero 1', done: false},
            {name: 'TODO 2', description: 'Todo numero 2',done: false}];

        $scope.add = function(todo) {
            if(!todo.name.length || !todo.description.length) {
                //TODO - mensagem de erro
                return;
            }
            $scope.todos.push(todo);
        };

        $scope.delete = function($index) {
            $scope.todos.splice($index, 1)
            //mensagem de deletado;
        };

    }]);
