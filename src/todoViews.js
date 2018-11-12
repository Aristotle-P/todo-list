import * as TodoController from './todoController'

function showAllLists() {
  const ul = document.createElement('ul');
  ul.id = 'all-lists'
  const main = document.getElementById('main');
  main.appendChild(ul);
  ul.addEventListener('click', showFullList, false);
  for (let i=0; i<TodoController.lists.length; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += TodoController.lists[i].title;
  }
}

function showFullList(e) {
  const liEle = e.target.innerHTML;
  const list = TodoController.lists.find(arr => arr.title === liEle);
  const unordered = document.createElement('ul');
  const main = document.getElementById('main');
  main.appendChild(unordered);
  const listed = document.createElement('li');
  unordered.appendChild(listed);
  listed.innerHTML += list.title;
}

function showEditTodo() {

}

export { showAllLists, showFullList, showEditTodo }