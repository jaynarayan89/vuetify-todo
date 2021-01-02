<template>
  <v-list
    flat
     v-if="$store.state.tasks.length"
    >
    <todo v-for="task in $store.getters.filteredTasks" :task="task" />
    
      
    </v-list>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
    'todo': require('@/components/todos/todo.vue').default,
  },
}
</script>
