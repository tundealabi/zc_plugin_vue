<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ todo }}</p>
  </div>
</template>
<script>
import { computed, watch } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const route = useRoute()
    const todo = ref("")
    const store = useStore();
    console.log(route)
    
    watch(
      () => route.query.id,
         newId => {
        todo.value = store.getters.getTodoById(newId)
      }
    )
    return {
      todo
    }
  },
}
</script>
