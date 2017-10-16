<template>
	<div class="right_two">
	
		<div class="bot1">
		<!-- <div class="returns el-icon-arrow-left" @click="fns()">返回</div> -->
			<div class="b_top"><em>标题:</em>{{datas.article_name}}</div>
			<div class="b_mid"><span><em>作者:</em>{{datas.article_name}}</span><span><em>时间:</em>{{datas.time}}</span></div>
			<div class="b_bot"><em>内容:</em>{{datas.content}}</div>
		</div>
	</div>
</div>
</template>
<script>
import $ from "jquery"
export default {
    data() {
      return {
      		datas:[]
      }
    },
    methods: {
      	getData(){
      		this.datas = this.$route.query.vals;
      	},
      	fns(){
      		this.$router.go(-1)
      	}
    },
    created(){
    	this.getData()
    },
    watch:{
    	$route(){
    		this.getData()
    	}
    }
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
em{
	font-style: normal;
	font-size: 23px;
	padding-right: 20px;
	box-sizing: border-box;
}
	.right_two{
		width: 100%;
		height: auto;
		background: rgba(0,0,0,0.4);
		padding: 40px;
		/*padding-top: 60px;*/
		box-sizing: border-box;
	}
	.bot1{
		width: 100%;
		height: 100%;
		/*position: relative;*/
	}
	.b_top{
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 24px;
		background: #d3dce6;
		border-radius: 9px;
		letter-spacing: 2px;
		opacity: 0.7;
		color: #000;
	}
	.b_mid{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top:20px;
	}
	.b_mid span{
		display: flex;
		flex:1;
		height: 50px;
		line-height:50px;
		padding: 0 15px;
		box-sizing: border-box;
		font-size: 20px;
		background: #d3dce6;
		border-radius: 9px;
		opacity: 0.7;
	}
	.b_mid span:nth-child(1){
		margin-right:10px;
	}
	.b_mid span:nth-child(2){
		margin-left:10px;
	}
	.bot1 .b_bot{
		width: 100%;
		margin-top: 20px;
		height: 300px;
		background: #d3dce6;
		border-radius: 9px;
		opacity: 0.7;
		padding: 10px 20px;
		box-sizing: border-box;
		font-size: 18px;
	}
	/*.returns{
		width: 80px;
		height: 40px;
		font-size: 25px;
		align-items: center;
		display: flex;
		font-family: "Microsoft YaHei";
		color: #fff;
		position: absolute;
		top: -50px;
		left: 0;
	}*/

	
</style>