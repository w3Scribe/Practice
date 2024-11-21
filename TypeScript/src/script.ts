interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OptionalTodo = OptionalProps<Todo>;
