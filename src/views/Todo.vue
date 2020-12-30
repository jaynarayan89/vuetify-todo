<template>
  <div class="home">
    <field-add-todo/>
    <no-todos/>
    <todo-list/>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  components: {
    'field-add-todo': require('@/components/todos/fieldAddTodo.vue').default,
    'no-todos': require('@/components/todos/noTodos.vue').default,
    'todo-list': require('@/components/todos/todoList.vue').default,
  },
}
</script>
