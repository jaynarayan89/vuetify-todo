import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tasks:[
		{
			id:1,
			title:'Hang in there',
			done:false,
		},
		{
			id:2,
			title:'Champions stick through the rainy days',
			done:false,
		},
		{
			id:3,
			title:'The day will come as long as night',
			done:false,
		},
  	]
  },
  mutations: {
  	addTask(state,newTitle)
    {
      let newTask = {
        id:Date.now(),
        title:newTitle,
        done:false
      }
      state.tasks.unshift(newTask);
    },
    markTaskAsDone:function(state,id)
    {
      let todo = state.tasks.filter(task=>task.id === id)[0];
      todo.done = !todo.done;
    },
    deleteTodo(state,id)
    {
      state.tasks = state.tasks.filter(task=>task.id !== id);
    }
  },
  actions: {
  },
  modules: {
  }
})
