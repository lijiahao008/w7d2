
export function getTodos() {
  return $.ajax({
    method: "GET",
    url: "/api/todos"
  });
}

export function createTodo(todo) {
  return $.ajax({
    method: "POST",
    url: "/api/todos",
    data: { todo }
  });
}

export function deleteTodo(todo) {
  return $.ajax({
    method: "DELETE",
    url: `/api/todos/${todo.id}`
  });
}

export function updateTodo(todo) {
  return $.ajax({
    method: "PATCH",
    url: `/api/todos/${todo.id}`,
    data: { id: '${todo.id}', done: '${!todo.done}', title: '${todo.title}', body: '${todo.body}' }
  });
}

window.getTodos = getTodos;
