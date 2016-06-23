'use strict';

describe('Controller: TodoController', function () {

    beforeEach(module('todoApp'));

    var controller, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('TodoController', {
            $scope: scope
        });
    }));

    it('should have the default todos', function () {
        expect(scope.todos.length).toBe(2);
    });

    it('should save a todo', function () {
        scope.todo.description = 'Todo teste';
        scope.save();
        expect(scope.todos.length).toBe(3);
    });

    it('should not save an empty todo', function () {
        scope.todo.description = '';
        scope.save();
        expect(scope.todos.length).toBe(2);
        expect(scope.message).toBe('A descrição deve ser preenchida !');
    });

    it('should update the todo at index 0', function () {
        scope.update(0);
        scope.todo.description = 'Update todo 0';
        scope.save();
        expect(scope.todos[0].description).toBe('Update todo 0');
    });

    it('should delete the todo at index 1', function () {
        scope.delete(1);
        expect(scope.todos.length).toBe(1);
        expect(scope.message).toBe('Anotação apagada com sucesso.');
    });
});