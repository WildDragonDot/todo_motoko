import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Todo { 'id' : bigint, 'title' : string, 'completed' : boolean }
export interface _SERVICE {
  'add' : ActorMethod<[string], Todo>,
  'getTodos' : ActorMethod<[], Array<Todo>>,
  'remove' : ActorMethod<[bigint], undefined>,
  'toggleCompletion' : ActorMethod<[bigint], undefined>,
}
