export type Todo = {
    content: string,
    completed: boolean
}

export function clickItemCalc(todos: Todo[], ix: number): Todo[] {
  let newTodos = todos.slice();
  newTodos[ix].completed = !newTodos[ix].completed;
  return newTodos;
}

export function clickRemoveCalc(todos: Todo[], ix: number): Todo[] {
  return todos.filter((v, ix2) => ix !== ix2)
}

export function clickAddCalc(todos: Todo[], todo: string): { todos: Todo[]; newTodo: string } {
  let newTodos = [...todos, {
    completed: false, content: todo
  }]
  let newTodo = '';
  return {todos: newTodos, newTodo};
}

export function initialTodolistCalc() {
  return [
    {
      content: "todo1",
      completed: false
    },
    {
      content: "todo2",
      completed: true
    }];
}
