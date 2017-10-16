<template>
<div class="box">
	<div class="top">
		这是index页
		<button @click="fn()">点击跳转下一页</button>
	</div>
	
	
</div>
</template>
<script>
	import $ from "jquery"
	// import {mapActions,mapState} from "vuex"
  export default {
  	name:"index",
    data() {
      return {
      };
    }
    // methods:{
    // 	...mapActions(["defaultData"]),
	   //  redirectfn(){
	   //      this.$router.push({path:"/"})
	   //  },
    // 	fn(){

    // 	}
      
    // },
    // created(){
    // 	this.$router.push("/")
    // 	this.defaultData()
    // },
    // computed:{
    //   ...mapState({
    //     state:function(state){
    //       if(state.state == 'end'){
    //         alert(1)
    //         this.$router.push("/list")
    //       }else if(!state.state){
    //         console.log("已发送数据请求")
    //         this.defaultData()
    //       }else{
    //         this.$router.push("/")
    //       }
          

          
    //       return state.state
    //     }
    //   })
    // },
    // watch:{
    //   state(){
    //     console.log(this.state)
    //   }
    // }
  }
</script>
<style>
	*{
		margin:0;
		padding: 0;
		list-style: none;
		font-family: "Microsoft YaHei";
		box-sizing: border-box;
	}
	a{
		text-decoration: none;
	}
	.box{
		width: 100%;
		height: 100%;
		
	}
	.top{
		width: 100%;
		display: flex;
		align-items: center;
		background: #324157;
		position: fixed;
		height: 50px;
		color: #fff;
		top: 0;
		left: 0;
		z-index: 10;
	}
	button{
		height: 40px;
		margin-left: 50px;
	}
	
</style>