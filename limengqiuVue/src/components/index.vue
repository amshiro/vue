<template>
<div class="box">
	<div class="top">
		<div class="title">个人博客</div>
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-submenu v-for="(item,ind) in formData" v-bind:index="ind+''" :key="ind">
			    	<template slot="title">{{item.onedata.cnname}}</template>
			    	<el-menu-item v-for="(items,inds) in item.twodata" v-bind:index="ind+''+inds">{{items.cnname}}</el-menu-item>
			  </el-submenu>
		</el-menu>
	</div>
	<div class="mid">
		<div class="left">
			<div class="jia">
				<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ name: 'list_two',query:{cnname:formData_one}}"><span class="spn1" @click="fns()">{{formData_one}}</span></el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/list_two',query:{cnname:formData_two}}">{{formData_two}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="left_all">
				<router-view></router-view>
			</div>
		</div>
		<div class="right">
			<div class="all_1">
				<div class="ri_top">全站搜索</div>
				<div class="ri_mid">
					<el-input class="inp" @change="searchkey" v-model="input" placeholder="请输入内容"></el-input>
					<el-button class="btn" type="primary" icon="search" @click="search">搜索</el-button>
				</div>
			</div>

			<div class="all_2 all_3">
				<div class="ri_top">查询结果</div>
				<div class="ri_mid"  show="false" opacity="0">
					<el-table
					 show="false" opacity="0"
					    :data="searchData"
					    style="width: 100%"
					    @row-click="clickCh" replace>
					    <el-table-column
					      prop="List"

					      label=""
					      width="50">
							<template scope="scope">
								1
						     </template>
					    </el-table-column>
					    <el-table-column
					      prop="article_name"
					      label=""
					      width="250">
					    </el-table-column>
					 </el-table>
				</div>
			</div>


			<div class="all_2">
				<div class="ri_top">点击排行</div>
				<div class="ri_mid">
					<el-table
					    :data="tableData"
					    style="width: 100%"
					    @row-click="clickCh" replace>
					    <el-table-column
					      prop="List"
					      label=""
					      width="50">
							<template scope="scope">
								1
						     </template>
					    </el-table-column>
					    <el-table-column
					      prop="article_name"
					      label=""
					      width="150">
					    </el-table-column>
					    <el-table-column
					      prop=""
					      label=""
					      width="50">
					      <template scope="scope" >
								<span class="el-icon-star-on" ></span>
						     </template>
					    </el-table-column>
					    <el-table-column
					      prop="visitors"
					      label="0"
					      width="50">
					    </el-table-column>
					 </el-table>
				</div>
			</div>
			
			<div class="all_2">
				<div class="ri_top">最新文章</div>
				<div class="ri_mid">
					<el-table
					    :data="tableData"
					    style="width: 100%"
					    @row-click="clickCh">
					    <el-table-column
					      prop=""
					      label=""
					      width="40">
							<template scope="scope">
								1
						     </template>
					    </el-table-column>
					    <el-table-column
					      prop="article_name"
					      label=""
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="time.split('')"
					      label="0"
					      width="140">
					    </el-table-column>
					 </el-table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import $ from "jquery"
  export default {
  	name:"index",
    data() {
      return {
      	input: '',
        activeIndex: '1',
        formData:[],
        tableData:[],
        formData_one:'',
        formData_two:'',
        searchData:[],
        state:false,
        hotname:'',
        count:0
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.formData_one = this.formData[keyPath[0]].onedata.cnname;
        this.formData_two = this.formData[keyPath[0]].twodata[keyPath[1].slice(1)].cnname;
        this.$router.push({"name":"list_two",query:{"cnname_one":this.formData_one,"cnname_two":this.formData_two}})
      },
      fns(){
      	// $(this).css("color","#97a8be")
      },
      clickCh(data){  //点击某一方
      	var _this = this;
      	console.log(data)
      	this.hotname = data.article_name;
      	this.tableData.forEach(function(val,ind){
	      	if(_this.hotname == val.article_name){
	      		val.visitors++;
	      	}
	    })
      	
      	this.$router.push({"name":"list_deriay",query:{"vals":data}})
      },
      search(datass){
      	var _this = this;
      	this.searchData = [];
      	console.log(this.input)
      	if(this.input != ''){
      		this.tableData.forEach(function(val,ind){
	      		if(val.article_name.slice(0,1) == _this.input.slice(0,1)){
	      			_this.searchData.push(val);
	      		}
	      		// else if(val.article_name.slice(0,2) == _this.input.slice(0,2)){
	      		// 	_this.searchData.push(val);
	      		// }else if(val.article_name.slice(0,3) == _this.input.slice(0,3)){
	      		// 	_this.searchData.push(val);
	      		// }else if(val.article_name.slice(0,4) == _this.input.slice(0,4)){
	      		// 	_this.searchData.push(val);
	      		// }else if(val.article_name == _this.input){
	      		// 	_this.searchData.push(val);
	      		// }
	      		// else{
	      		// 	_this.searchData.push({"article_name":"抱歉，查询不到此结果！"});
	      		// 	return false;
	      		// }
	      	})
      	}else{
      		this.searchData = [];
      	}
      },
      searchkey(){
      	this.search()
      	
      }
    },
    created(){
    	var _this = this;
    	this.axios.get("http://localhost:9999/api/front_article/getNav").then(function(data){
    		_this.formData = data.data.data;    		
    	})
    	this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then(function(data){
    		_this.tableData = data.data.data; 
    	})
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
		top: 0;
		left: 0;
		z-index: 10;
	}
	.el-menu-demo{
		flex:1;
	}
	.title{
		font-size: 30px;
		color:#fff;
		padding: 0 25px;
	}
	.jia{
		width: 100%;
		height: 50px;
		padding: 0 30px;
		box-sizing: border-box;
		font-size: 17px;
		color: #fff;
		margin-top: 60px;
	}
	.el-breadcrumb{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 17px;
		color: #fff;
	}
	.el-breadcrumb__item__inner, .el-breadcrumb__item__inner a{
		color: #fff;
	}
	.mid{
		height: auto;
		display: flex;
		width: 100%;
		justify-content: flex-end;

	}
	.left{
		flex:1;
		height: auto;
		padding: 0 30px;
		box-sizing: border-box;
	}
	.left_all{
		flex:1;
		height: auto;
	}
	.right{
		width: 350px;
		height: auto;
		padding: 0 10px;
		box-sizing: border-box;
		margin-top: 60px;
	}
	.all_1{
		width: 100%;
		height: auto;
		background: rgba(0,0,0,0.4);
		padding: 15px;
		box-sizing: border-box;
		border-radius: 9px;
		margin-top: 50px;
	}
	.all_2{
		width: 100%;
		height: auto;
		background: rgba(0,0,0,0.4);
		padding: 15px;
		box-sizing: border-box;
		border-radius: 9px;
		margin-top: 20px;
	}
	.ri_top{
		width: 100%;
		height: 35px;
		text-align: center;
		font-size: 17px;
		background: #f5f5f5;
		line-height: 35px;
		border-radius: 8px;
		background: #99a9bf;
	}
	.all_1 .ri_mid{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
	}
	.all_1 .ri_mid .inp{
		flex:1;
		margin-right: 24px;
	}
	.all_2 .ri_mid{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
	}
	.all_2 .el-table__header-wrapper,.all_1 .el-table__header-wrapper{
		width: 0;
		height: 0;
	}
	.el-table .cell{
		padding: 7px;
		box-sizing: border-box;
	}
	.all_1 .btn{
		width: 100px;
	}
</style>