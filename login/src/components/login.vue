<template>
<div class="box">
  <p v-if="state=='start'">林屿森开始请求数据...</p>
	<p v-else-if="state=='login'">林屿森正在拼命加载中...</p>
  <p v-else-if="state=='end'">林屿森数据请求完毕...</p>
  <p v-else>林屿森数据失败，再次发起请求...</p>
</div>
</template>
<script>
import {mapActions,mapState} from "vuex"
  export default {
  	name:'login',
    methods:{
      ...mapActions(["defaultData"]),
      redirectfn(){
        this.$router.push({path:"/"})
      }
    },
    created(){
    this.defaultData()
    },
    computed:{
      ...mapState({
        state:function(state){
          console.log(state,1111)
          console.log(state.navData,2222)
          if(state.state == 'end'){
            this.$router.push("/index")
          }else if(!state.state){
            console.log("已发送数据请求")
            this.defaultData()
          }else{
            this.$router.push("/login")
          }
          

          
          return state.state
        }
      })
    },
    watch:{
      state(){
        console.log(this.state)
      }
    }
  }
</script>
<style>
*{
  margin:0;
  padding:0;
}
.box{
  font-size: 25px;
  font-family: "Microsoft YaHei";
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
