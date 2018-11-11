import * as Factory from './factories'
const lists = [];
function createNewTodo(title, description, dueDate, priority, isCompleted, list) {
  const newTodo = Factory.todoFactory(title, description, dueDate, priority, isCompleted);
  list.todoList.push(newTodo);
}

function createNewList(title) {
  const newList = Factory.listFactory(title);
  lists.push(newList);
}

function deleteTodo(name, list) {
  const listName = lists.find(arr => arr.title === list);
  const index = listName.todoList.findIndex(obj => obj.title === name);
  listName.todoList.splice(index, 1);
}

function deleteList(name) {
  const index = lists.findIndex(list => list.title === name);
  lists.splice(index, 1);
}

function changeTodoCompletion(name, list) {
  const listName = lists.find(arr => arr.title === list);
  const index = listName.todoList.findIndex(obj => obj.title === name);
  const todo = listName.todoList[index];
  if (todo.isCompleted !== true) {
    todo.isCompleted = true
  } else {
    todo.isCompleted = false
  }
}

export { createNewTodo, createNewList, deleteTodo, changeTodoCompletion, deleteList, lists }