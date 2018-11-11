import * as TodoController from './todoController'


TodoController.createNewList("Test list");
TodoController.createNewList("Second list");
TodoController.createNewTodo("Cook", "Make chicken", "Today", "Normal", false, TodoController.lists[0]);
TodoController.createNewTodo("Clean", "Vacuum the house", "Today", "Normal", false, TodoController.lists[0]);
TodoController.createNewTodo("Sleep", "Get some rest", "Tonight", "Normal", false, TodoController.lists[0]);
//const listName = lists.find(arr => arr.title === "Test list");
//const index = listName.todoList.findIndex(obj => obj.title === name);
//console.log()
console.log(TodoController.lists);
TodoController.deleteList("Test list");
console.log(TodoController.lists);