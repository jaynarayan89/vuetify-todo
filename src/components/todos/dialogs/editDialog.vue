<template>
	<v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      
      <v-card>
        <v-card-title class="headline">
          Edit this task
        </v-card-title>
        <v-card-text>
          <v-text-field 
          v-model="taskTitle"
           @keyup.enter="saveTask"
           />
      
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="saveTask()"

            :disabled="taskInvalid"
          >
            save
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('close')"
          >
            Cancle
          </v-btn>
        </v-card-actions>
      </v-card>
    
    </v-dialog>
</template>
<script>
  export default {
    props:['task'],
    data(){
      return{
        taskTitle: null
      }
    },
    computed:{
      taskInvalid()
      {
        return !this.taskTitle || this.taskTitle === this.task.title;
      }
    },
    methods:{
    	saveTask(){

        if(this.taskInvalid)
          return;
        
        let payload = {
          id : this.task.id,
          title : this.taskTitle
        }
        this.$store.dispatch('updateTask',payload);
        this.$emit('close');
    	}
    },
    mounted(){
      this.taskTitle = this.task.title
    }
  }
</script>