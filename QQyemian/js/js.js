document.documentElement.style.fontSize = window.innerWidth/375*50+"px";
var box = new Vue({
	el:"#box",
	data:{
		arr:[]
	},
	created:function(){
		var that = this;
		$.ajax({
			url:"http://localhost:8881",
			success:function(result){
				console.log(result)
				that.arr = result;
			},
			error:function(error){
				console.log(error)
			}
		})
	}
})
