<template>
	<div class="right_two">
		<div class="bot">
			<template>
			  <el-table
			    :data="tableData"
			    border
			    :row-class-name="tableRowClassName"
			    @row-click="clickCh">
			    <el-table-column
			      prop="article_name"
			      label="标题"
			      width="230">
			    </el-table-column>
			    <el-table-column
			      prop="enname_one"
			      label="分类"
			      width="230">
			    </el-table-column>

			    <el-table-column
			      prop="editer"
			      label="作者"
			      width="230">
			    </el-table-column>

				<el-table-column
			      prop="time"
			      label="时间"
			      width="230">
			    </el-table-column>
			  </el-table>
			</template>
		</div>
		<!-- <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="nowPage"
          :page-sizes="[2, 5, 8,14]"
          :page-size="everyrows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.olddata.length">
        </el-pagination>
      </div> -->
	</div>
</div>
</template>
<script>
import $ from "jquery"
export default {
    data() {
      return {
      	olddata:[],
      	olddata1:[],
        everyrows:5,
        nowPage:1,
        tableData: [],
        cnnames:'',
        cnnames_one:'',
        cnnames_two:''
      }
    },
    methods: {
      handleSizeChange(val) {
        // this.everyrows = val;
        // this.tableData = this.olddata.slice((this.nowPage-1)*this.everyrows,this.everyrows)
      },
      
      handleCurrentChange(val) {
        // this.nowPage = val;
        // this.tableData = this.olddata.slice((val-1)*this.everyrows,this.everyrows*val)
      },
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      //点击渲染面包屑
      getData(){
      	  var _this = this;
		  this.tableData=[];
	      this.cnnames = this.$route.query.cnname;
	      this.cnnames_one = this.$route.query.cnname_one;
	      this.cnnames_two = this.$route.query.cnname_two;
	      // console.log(this.cnnames_one+"1")
	      // console.log(this.cnnames_two+"1")     //
	    	this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then(function(data){
	    		_this.olddata = data.data.data;	
		      	_this.olddata.forEach(function(val,ind){
			    		if(_this.cnnames == val.cnname_one){
			    			_this.tableData.push(val);
			    		}else if(_this.cnnames == val.cnname_two){
			    			_this.tableData.push(val);
			    		}
			    			
			    })
	    	})
      },
      getData1(){  //二级分类显示文章
      		var _this = this;
	    	this.tableData=[];
	   		this.cnnames_one = this.$route.query.cnname_one;
		    this.cnnames_two = this.$route.query.cnname_two;
	        this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then(function(data){
	    		_this.olddata1 = data.data.data;	
		      	_this.olddata1.forEach(function(val,ind){
			    		if(_this.cnnames_one == val.cnname_one && _this.cnnames_two == val.cnname_two){
			    			_this.tableData.push(val);
			    		}
			    })
	    	})
      },clickCh(data){  //点击某一方
      	this.$router.push({"name":"list_deriay",query:{"vals":data}})
      }

    },
    created(){
    	this.getData1();
    	this.getData();
    },
    watch:{
    	$route(){
    		this.getData();
    		this.getData1();
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
	.right_two{
		width: 100%;
		height: auto;
		background: rgba(0,0,0,0.4);
		padding: 40px;
		box-sizing: border-box;
		border-radius: 9px;
	}
	.bot{
		width: 100%;
	}
	.block{
		width: 880px;
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}
	.el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }	
  /*.mids{
  	width: 100%;
  	height: 35px;
  }*/
  .btn{
  	width: 140px;
  	height: 35px;
  	border:none;
  	background: orange;
  	color: #fff;
  	text-align: center;
  }
	.el-table__header-wrapper{
		width: 100%;
	}
	.el-table{
		width: 100%;
	}
	
</style>