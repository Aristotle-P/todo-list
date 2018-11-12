import * as TodoController from './todoController'
import * as TodoView from './todoViews'


TodoController.createNewList("Test list");
TodoController.createNewList("Second list");
TodoController.createNewTodo("Cook", "Make chicken", "Today", "Normal", false, TodoController.lists[0]);
TodoController.createNewTodo("Clean", "Vacuum the house", "Today", "Normal", false, TodoController.lists[0]);
TodoController.createNewTodo("Sleep", "Get some rest", "Tonight", "Normal", false, TodoController.lists[0]);
TodoView.showAllLists();