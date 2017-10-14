<template>
<div class="box">
	<div class="topss">
			<div class="t_top">欢迎回来</div>
			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="Text">
		    <el-input type="text" v-model="ruleForm2.Text" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="Pass">
		    <el-input type="password" v-model="ruleForm2.Pass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</div>
</template>
<script>
  export default {
  	name:'login',
    data() {
      var validateText = (rule, value, callback) => {   //用户名
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else{
        	if(/^[a-zA-Z]{3,12}$/.test(value)){
        		callback();
        	}else{
        		callback(new Error('用户名格式不正确!'));
        	}
          
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else{
        	if(/^[a-zA-Z\d]{4,18}$/.test(value)){
        		callback();
        	}else{
        		callback(new Error('密码格式不正确!'));
        	}
        }
      };
      return {
        ruleForm2: {
          Text: '',
          Pass: ''
        },
        rules2: {
          Text: [
            { validator: validateText, trigger: 'blur' }
          ],
          Pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	var _this = this;
          	console.log(this.ruleForm2.Text)
          	this.axios.post("http://localhost:9999/api/back_class",{
          		loginname:this.ruleForm2.Text,    //登录名
 				loginpw:this.ruleForm2.Pass   //登录密码
          	}).then(function(data){
          		if(data.data.code == 1001){
          			_this.$message({message: '恭喜你，登陆成功',type: 'success'});

          			setTimeout(function(){
          				_this.$router.push({"name":"index"})
          				_this.$router.go(0)
          			},3000)
          		}else if(data.data.code == '1002'){
          			_this.$message({message: '登录失败',type: 'error'});
          		}else{
          			_this.$message({message: '用户名不存在',type: 'error'});
          		}
          	})
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
	*{
		margin:0;
		padding:0;
		width: 100%;
		height: 100%;
	}
	.box{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.topss{
		width: 450px;
		height: 450px;
		border:4px dashed orange;
	}
	.t_top{
		width: 100%;
		text-align: center;
		height: 90px;
		font-size: 40px;
		line-height: 90px;
		font-family: "华文行楷";
		color: orange;
		margin-top: 20px;
	}
	.el-form{
		flex:1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.el-form-item__content{
		width: 320px;
	}
	.el-form-item{
		width: 100%;
		height: 50px;
	}
	.el-form-item:nth-child(1){
		margin-top: 30px;
	}
	.el-button{
		height: 40px;
		margin-top: 20px;
	}
	.el-button+.el-button{
		margin-left: 0;

	}
	.el-message{
		width: 200px;
		height: 40px;
	}
</style>