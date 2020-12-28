<template>
  <div class="home">
  <v-list
      flat
     
    >
    <div v-for="task in tasks" :id="task.id">
     <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
             
            </v-list-item-content>
          </template>
     </v-list-item>
	<v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Todo',
  components: {
  },
  data(){
  	return {
  		tasks:[
  		{
  			id:1,
  			title:'wake up '
  		},
  		{
  			id:2,
  			title:'brush yout teeth'
  		},
  		{
  			id:3,
  			title:'plan your day'
  		},
  		{
  			id:4,
  			title:'listem to afirmations'
  		},
  		{
  			id:5,
  			title:'morning coding practice'
  		},
  		]
  	}
  }
}
</script>
