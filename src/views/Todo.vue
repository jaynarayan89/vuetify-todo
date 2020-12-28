<template>
  <div class="home">
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
  <v-list
      flat
     v-if="tasks.length"
    >
    <div v-for="task in tasks" :id="task.id">
     <v-list-item 
      @click="markTaskAsDone(task.id)"
      :class="{'blue lighten-5':task.done}"
      >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content
              :class="{'text-decoration-line-through':task.done}"
            >
              <v-list-item-title>{{ task.title }}</v-list-item-title>
             
            </v-list-item-content>
            <v-list-item-action>
              <v-btn 
              @click.stop="deleteTodo(task.id)"
              icon
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
     </v-list-item>
	<v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="text-h5 pa-4 primary--text" >
     <p> 
     No Tasks scheduled. Lets get something done.Add new task using above input. <v-icon class="primary--text">mdi-check</v-icon>
      </p>
     
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Todo',
  components: {
  },
  methods:{

    markTaskAsDone:function(id)
    {
     let todo = this.tasks.filter(task=>task.id === id)[0];
      todo.done = !todo.done;
    },
    deleteTodo(id)
    {
      this.tasks = this.tasks.filter(task=>task.id !== id);
    },
    addTask()
    {
      let newTask = {
        id:Date.now(),
        title:this.newTodo,
        done:false
      }
      this.tasks.unshift(newTask);
      this.newTodo = '';
    }
  },
  data(){
  	return {
      newTodo:'',
  		tasks:[]
  	}
  }
}
</script>
