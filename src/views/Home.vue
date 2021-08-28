<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TextField v-model="todoInputText" :handler="setTodoInputText" ref="todoTextField" :reset-field="reset"/>
    <Button btnText="Add Todo" @click="submitTodo"/>
    <TodosContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex'
import TextField from '../components/text_field/TextField.vue'
import Button from '@/components/button/Button'
import TodosContainer from '@/components/todosContainer/TodosContainer' 
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: {
    TextField,
    Button,
    TodosContainer
  },
  setup(){
    const todoTextField = ref(null)
    const store = useStore()
    let todoInputText = ref("");
    const setTodoInputText= (val) => {
      todoInputText = val
    }
    const submitTodo = () => {
     
        const newTodo = {
          id: Date.now().toString(),
          task: todoInputText
          }
        
        store.commit({
          type: 'addTodo',
          data: newTodo
})
    }
    return {
      todoInputText,
      submitTodo,
      setTodoInputText
    }
  }
}
</script>
