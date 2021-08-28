<template>
    <div class="todos-container">
        <p class="no-todo" v-if="data.length < 1">No Todo Currently</p>
        <ul class="todo-list" v-else>
            <li class="todo" v-for="todo in data" :key="todo.id" >
        {{ todo.task }}
                <Button btnText="Delete" @click="deleteTodo(todo.id)"/>
                </li>
        </ul>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import Button from '@/components/button/Button'
import { computed } from '@vue/runtime-core'
export default {
    components: { Button },
    setup() {
         const store = useStore()
         const deleteTodo = (todoId) => {
             store.commit('removeTodo',todoId)
         }
       const todos = computed(() => store.state.todos)

         return {
             data: todos,
             deleteTodo
         }
    },
}
</script>
<style scoped>
    .todos-container {
        width: 70%;
        margin: 0 auto;
    }
    .todo-list {
        list-style: none;
    }
    .todo {
        margin-bottom: 1rem;
    }
</style>