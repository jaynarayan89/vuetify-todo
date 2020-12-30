<template>
 <div v-if="$store.state.tasks.length === 0" class="text-h5 pa-4 primary--text" >
     <p> 
     No Tasks scheduled. Lets get something done.Add new task using above input. <v-icon class="primary--text">mdi-check</v-icon>
      </p>
     
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
