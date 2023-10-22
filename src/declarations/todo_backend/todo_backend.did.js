export const idlFactory = ({ IDL }) => {
  const Todo = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'completed' : IDL.Bool,
  });
  return IDL.Service({
    'add' : IDL.Func([IDL.Text], [Todo], []),
    'getTodos' : IDL.Func([], [IDL.Vec(Todo)], []),
    'remove' : IDL.Func([IDL.Nat], [], []),
    'toggleCompletion' : IDL.Func([IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
