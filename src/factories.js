const todoFactory = (title, description, dueDate, priority, isCompleted) => {
  return {title, description, dueDate, priority, isCompleted};
};

const listFactory = (title) => {
  const todoList = [];
  return {title, todoList};
};

export { todoFactory, listFactory }