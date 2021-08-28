import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
    getTodoById: (state) => (id) => {
       console.log('jbjh',id)
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    addTodo({ todos },payload){
      todos.push(payload.data)
    },
    removeTodo(state, todoId) {
      console.log(todoId)
      console.log(state.todos.filter(todo => todo.id != todoId))
      state.todos = [...state.todos.filter(todo => todo.id != todoId)]
    }
  },
  actions: {
  },
  modules: {
  }
})
