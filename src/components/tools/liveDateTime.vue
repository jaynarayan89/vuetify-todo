<template>
	 <v-toolbar-title class="text-subtitle-1 ml-3">
      {{date}}
    </v-toolbar-title>
</template>
<script>
	import {format} from 'date-fns';
	export default{
		data(){
			return {
				date:null
			}
		},
		methods:{
			getDate()
			{
				this.date = format( new Date(),'d MMMM HH:mm:ss');
				setTimeout(this.getDate,1000);
			}
		},
		mounted(){
			this.getDate();

		}
	}
</script>
