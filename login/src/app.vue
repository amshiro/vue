<template>
<div>
	<router-view></router-view>
</div>
</template>
<script>
export default {
	name:"app",
	data(){
		return {

		}
	},
	created(){
		this.$store.axios = this.axios
	}
}
</script>
<style>
*{
	margin:0;
	padding:0;
}
</style>