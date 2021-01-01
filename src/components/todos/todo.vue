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
            

            <v-list-item-action v-if="task.dueDate">
                <v-list-item-action-text>
                  <v-icon  small>
                    mdi-calendar
                  </v-icon>
                  {{ task.dueDate | niceDate }}
                </v-list-item-action-text>
            </v-list-item-action>

            <v-list-item-action>
              <task-menu :task="task"/>      
            </v-list-item-action>

          </template>

     </v-list-item>
  <v-divider></v-divider>
    </div>
</template>

<script>
import {format} from 'date-fns';

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
    'task-menu':require('@/components/todos/taskMenu.vue').default,
  },
  filters:{
    niceDate(value){
      return format(new Date(value),'MMM d');
    }
  }
}
</script>
