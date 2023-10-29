import { action, computed, makeObservable, observable } from "mobx";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export default class TodoStore {
  todos: TodoItem[]=[]

  constructor(){
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      status: computed
    })
  }

  addTodo(title: string){
    const item: TodoItem={
      id:getId()
    }
  }
}