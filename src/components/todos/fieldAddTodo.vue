<template>
  <div>
     <v-text-field
    outlined
    class="pa-3"
    label="add new todo"
    append-icon="mdi-plus"
    clearable
    hide-details
    v-model="newTodo"
    @click:append="addTask()"
    @keyup.enter="addTask()"
    >
      
    </v-text-field>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
  methods:{
    addTask()
    {
      this.$store.dispatch('addTask',this.newTodo);
      this.newTodo='';
    }
  },
  data(){
    return {
      newTodo:'',
    }
  }
}
</script>
