import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({ 
        todoList: [
          {id: 1, name: 'Belajar HTML', isDone: false},
          {id: 2, name: 'Belajar CSS', isDone: false},
          {id: 3, name: 'Belajar JavaScript', isDone: false},
          {id: 4, name: 'Belajar PHP', isDone: false},
          {id: 5, name: 'Belajar Laravel', isDone: false},
        ]
    }),
    getters: {
      
    },
    actions: {
      toggleTodoStatus(id) {
          const todo = this.todoList.find(item => item.id === id);
          if (todo) {
              todo.isDone = !todo.isDone;
          }
      },
      addTodo(name) {
          const newTodo = {
              id: this.todoList.length + 1, 
              name,
              isDone: false,
          };
          this.todoList.push(newTodo);
      },
      removeTodo(id) {
          this.todoList = this.todoList.filter(item => item.id !== id);
      }
  },
})