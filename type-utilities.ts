type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

/// READONLY
const todo: Readonly<Todo> = {
  title: "Assistir",
  description:
    "Ipsum labore ipsum elitr ipsum diam sea kasd vero ut. Ipsum eos kasd dolore sea ipsum no kasd, ipsum sadipscing.",
  completed: false,
};

/// PARTIAL
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });

/// PICK
type TodoPreview = Pick<Todo, "title" | "description">;

/// OMIT
type TodoPreview2 = Omit<Todo, "completed">;
