
const allTodos = (state) => {
  const result = [];
  Object.keys(state.todos).forEach(key => {
    result.push(state.todos[key]);
  });
  return result;
};

export default allTodos;
window.allTodos = allTodos;
