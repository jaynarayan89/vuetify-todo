<template>
	<v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      
      <v-card>
        <v-card-title class="headline">
          Do you want to delete task?
        </v-card-title>
        <v-card-text>The task "{{ task.title }}"  will be deleted permenently.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('close')"
          >
            No
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="$store.dispatch('deleteTodo',task.id);$emit('close')"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    
    </v-dialog>
</template>
<script>
  export default {
    props:['task'],
    methods:{
    	cancleAction(){

    	}
    }
  }
</script>