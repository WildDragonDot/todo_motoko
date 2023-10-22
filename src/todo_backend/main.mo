import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";

actor {
    type Todo = {
        id: Nat;
        title: Text;
        completed: Bool;
    };

    var todos: [Todo] = [];
    var nextId: Nat = 0;

    public func add(title: Text): async Todo {
        let todo: Todo = { id = nextId; title = title; completed = false };
        nextId += 1;
        todos := Array.append<Todo>(todos, [todo]); // Use Array.append to add to the array
        return todo;
    };

    public func getTodos(): async [Todo] {
        return todos;
    };

    public func toggleCompletion(id: Nat): async () {
        todos := Array.tabulate<Todo>(todos.size(), func (index: Nat): Todo {
            let todo = todos[index];
            if (todo.id == id) {
                return { id = todo.id; title = todo.title; completed = not todo.completed };
            } else {
                return todo;
            }
        });
    };

    public func remove(idToRemove: Nat): async () {
    todos := Array.filter(todos, func (todo: Todo): Bool {
        return todo.id != idToRemove;
    });
};
};
