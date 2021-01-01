<template>
  <div>
     <v-text-field
    outlined
    class="pa-3"
    label="add new todo"
    clearable
    hide-details
    v-model="newTodo"
    @keyup.enter="addTask()"
    >
       <template v-slot:append>
            <v-icon
            color="primary"  
             @click="addTask()"
             :disabled="!newTodo"          
            >           
            mdi-plus
          </v-icon>
       </template>
    </v-text-field>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
  methods:{
    addTask()
    {
      if(!this.newTodo)
        return;
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
