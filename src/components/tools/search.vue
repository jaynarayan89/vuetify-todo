<template>
	 <v-text-field
            filled
            dense
            clearable
            @input="$store.commit('setSearch',$event)"
            @focus="searchClosed= false"
            @blur="searchClosed= true"
            :value="$store.state.search"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            class="expanding-search mt-2 "
            :class="{ 'closed': searchClosed && !$store.state.search }"
          ></v-text-field>
</template>
<script>
	export default{
		data(){
			return {
				searchClosed:true,
			}
		}
	}
</script>
<style lang="scss">
.expanding-search{
	transition:max-width 0.3s;

	.v-input__slot{
		&:before{
			border-color: transparent !important;
		}
		cursor:pointer !important;
	}
	&.closed{
		max-width:45px;
		.v-input__slot{
			background: none !important;
		}
	}
}
</style>