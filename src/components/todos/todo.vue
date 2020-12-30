<template>
  <div>
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
</template>

<script>
// @ is an alias to /src

export default {
  props: ['task'],
  methods:{

    markTaskAsDone:function(id)
    {
      this.$store.commit('markTaskAsDone',id);
    },
    deleteTodo(id)
    {
      this.$store.commit('deleteTodo',id);
    },
    addTask()
    {
      this.$store.commit('addTask',this.newTodo);
      this.newTodo='';
    }
  }
}
</script>
