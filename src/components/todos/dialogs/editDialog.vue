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
          <v-text-field v-model="taskTitle"/>
      
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="saveTask()"
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
        taskTitle: ''
      }
    },
    methods:{
    	saveTask(){
        let payload = {
          id : this.task.id,
          title : this.taskTitle
        }
        this.$store.commit('saveTaskTitle',payload);
        this.$emit('close');
    	}
    },
    mounted(){
      this.taskTitle = this.task.title
    }
  }
</script>