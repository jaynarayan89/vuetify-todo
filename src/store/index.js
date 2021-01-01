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
      dueDate:'2021-01-03'
		},
		{
			id:2,
			title:'Champions stick through the rainy days',
			done:false,
      dueDate:'2021-01-05'
		},
		{
			id:3,
			title:'The day will come as long as night',
			done:false,
      dueDate:null
		},
  	],
    snackbar:{
      show:false,
      text:'Hi, I am nackbar from vuex store.'
  },
  },
  
  mutations: {
  	addTask(state,newTitle)
    {
      let newTask = {
        id:Date.now(),
        title:newTitle,
        done:false,
        dueDate:null
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
    },
    saveTaskTitle:function(state,payload)
    {
      let todo = state.tasks.filter(task=>task.id === payload.id)[0];
      todo.title = payload.title;
    },
    showSnackbar(state,title)
    {
      let timeout = 0
      if(state.snackbar.show)
      {
        state.snackbar.show= false;
        timeout= 300;
      }

      setTimeout(()=>{
        state.snackbar.show= true;
        state.snackbar.text = title;  

      },timeout);
    },
    hideSnackbar(state)
    {
      state.snackbar.show= false;
    }
  },
  actions: {

    addTask({commit},newTitle){
      commit('addTask',newTitle);
      commit('showSnackbar','New Task added');
    },
     deleteTodo({commit},id)
    {
      commit('deleteTodo',id);
      commit('showSnackbar','Task deleted');
    },

    updateTask({commit},payload){
      commit('saveTaskTitle',payload);
      commit('showSnackbar','Task updated');
    },


  },
  modules: {
  }
})
