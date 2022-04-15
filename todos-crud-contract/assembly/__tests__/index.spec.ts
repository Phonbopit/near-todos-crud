import { create, getById } from '../index';
import { Todo, todos } from '../model';

describe('contract methods', () => {
  it('creates a todo', () => {
    // call the create method
    const todo = create('Drink water');

    // lookup in the PersistentUnorderedMap for our todo
    // expect the persisted todo to equal the todo returned
    // by the create method above.
    expect(todos.getSome(todo.id)).toStrictEqual(todo);
  });

  it('gets a todo by id', () => {
    // create three todos
    const a = Todo.insert('Drink water');
    const b = Todo.insert('Get sleep');
    const c = Todo.insert('Exercise');

    // get each todo by its it
    expect(getById(a.id)).toStrictEqual(a);
    expect(getById(b.id)).toStrictEqual(b);
    expect(getById(c.id)).toStrictEqual(c);
  });
});
