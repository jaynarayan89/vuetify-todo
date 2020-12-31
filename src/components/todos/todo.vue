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
              @click.stop="dialogs.delete = true"
              icon
              >
              <!-- deleteTodo(task.id) -->
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

          </template>

     </v-list-item>
  <v-divider></v-divider>
    <delete-dialog 
    v-if="dialogs.delete" 
    :task="task"
    @close="dialogs.delete = false"
    />
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
      this.$store.dispatch('deleteTodo',id);
    },
    addTask()
    {
      this.$store.commit('addTask',this.newTodo);
      this.newTodo='';
    }
  },
  components:{
    'delete-dialog':require('@/components/todos/dialogs/deleteDialog.vue').default
  },
  data(){
    return {
      dialogs:{
        delete:false
      }
    }
  }
}
</script>
