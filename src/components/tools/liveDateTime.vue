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
				return format( new Date(),'dd/MM/yyyy');
			}
		},
		mounted(){
			this.date = this.getDate()
		}
	}
</script>
