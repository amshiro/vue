import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var num  = true;
var store = new Vuex.Store({
	state:{
		navData:null,
		articleData:null
	},
	actions:{
		getallData({commit}){
			var dataNav = function(){
				console.log(this)
				return new Promise((resolve,reject)=>{
					this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then((data)=>{
						commit("navData_m",data.data.data)
						resolve()
					})
				})
			}
			
			var dataArticle = function(){
				return new Promise((resolve,reject)=>{
					this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then(function(data){
						console.log(111111)
						commit("articleData_m",data.data.data)
						resolve()
					})
				})
				
			}
			
			return{
				axios:this.axios,
				dataNav,
				dataArticle
			}
		},
		defaultData({dispatch,commit},fn){
			commit("state_m","start")
			dispatch("getallData").then((data)=>{
				Promise.all([data.dataNav(),data.dataArticle()]).then(()=>{
					commit('state_m',"end")
				},()=>{
					commit("state_m",false)
				})
			})
		}
	},
	mutations:{
		navData_m(state,data){
			state.navData = data;
		},
		articleData_m(state,data){
			state.articleData = data;
		},
		state_m(state,data){
			console.log(data+"这里的")
			state.state = data;
		}
	}
})

export default store


//分成小模块
// var module1 = {
// 	state:{
// 		num:1
// 	},
// 	actions:{

// 	},
// 	mutations:{
// 		aa(starte){

// 		}
// 	}
// }

// var store = new Vuex.Stroe({
// 	module1:module1
// })



