import Vue from "vue"
import Router from "vue-router"
import axios from "axios"
import VueAxios from "vue-axios"
import store from "./store/store.js"


Vue.use(Router)
Vue.use(VueAxios,axios)




//路由
import app from "./app.vue"
//登录页
import login from "./components/login.vue"
//首页
import index from "./components/index.vue"

//一二级列表页
import list from "./components/routers/list.vue"
// import list_two from "./components/routers/list_two.vue"
// import list_deriay from "./components/routers/list_deriay.vue"

//element ui(全部引入)
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)  


var router = new Router({
	routes:[
		{
			path:"/",
			redirect:'/login'
		},
		{
			name:"login",
			path:"/login",
			component:login
		},
		{
			name:"index",
			path:"/index",
			component:index,
			children:[
				{
					name:"list",
					path:"/list",
					component:list
				}
			]
		}
		
		// ,
		// {
		// 	name:"index",
		// 	path:"/index",
		// 	component:index
		// 	// redirect:'list',
		// 	// 
		// 	// 	{
		// 	// 		name:"list_two",
		// 	// 		path:"/list_two",
		// 	// 		component:list_two
		// 	// 	},
		// 	// 	{
		// 	// 		name:"list_deriay",
		// 	// 		path:"/list_deriay",
		// 	// 		component:list_deriay
		// 	// 	}
		// 	// ]
		// }
		
	]
})


new Vue({
	el:"#app",
	template:"<app/>",
	components:{
		app:app
	},
	router,
	store

})