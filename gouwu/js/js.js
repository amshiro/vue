document.documentElement.style.fontSize = window.innerWidth/375*50+"px";
$("#ols li").on("click",function(){
	alert(1)
	$(this).addClass("on").siblings().removeClass("on")
})
var box = new Vue({
	el:"#box",
	data:{
		arr:[]
	},
	created: function () {
		var that = this;
	   $.ajax({
		   	url:"http://localhost:8008",
		   	success:function(result){
		   		that.arr = result;
		   	},
		   	error:function(error){
		   		console.log(error)
		   	}
	   })
	}
})
