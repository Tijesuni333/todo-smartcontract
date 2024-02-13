 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ToDo{
    struct TodoList{
        uint id;
        string header;
        string description;
        bool isCompleted;

    }
    TodoList[] public todoItems;

    uint public nextTodoItem;

    function createTodo(string memory _header, string memory _description)public{
        todoItems.push(TodoList( nextTodoItem, _header,_description, false ));
        nextTodoItem++;
    }

    function toggleTodoItem(uint _id)public{
        TodoList storage todo = todoItems[_id];
        todo.isCompleted = !todo.isCompleted; 
    }

    function updateTodoItem(uint _id, string memory _header, string memory _description)public{
         TodoList storage todo = todoItems[_id];
         todo.header = _header;
         todo.description = _description;
    }

    function deleteTodoItem(uint _id)public {
        delete todoItems[_id];
    }
    function getTodoItem(uint _id) public view returns(TodoList memory ){
        return todoItems[_id];
    }
}