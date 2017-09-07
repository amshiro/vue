var gulp = require("gulp");
var webserver = require("gulp-webserver");
var data = [
	{
		"imgs":"images/1_03.jpg",
	 	"name":"一说科技",
	 	"arr1":[
	 		{
	 			"img":"images/1_06.jpg",
				"tex":"智能机器人S1 儿童陪伴机器人 玩具早教 故事机",
				"price1":"￥898",
				"price2":"￥1280",
				"num":'x1'
	 		}
	 	]
	},
	{
		"imgs":"images/1_09.jpg",
	 	"name":"天猫超市",
	 	"arr1":[
	 		{
				"img":"images/2_11.jpg",
				"tex":"[天猫超市] 达利园 瑞士卷蛋糕 (草莓味) 240/袋(12枚)",
				"price1":"￥14.9",
				"price2":"0.24kg",
				"num":'x1'
			},
			{
				"img":"images/1_13.jpg",
				"tex":"[天猫超市] 可比克薯我任性2+1袋装薯片122g休闲膨化办公室零食",
				"price1":"￥10.9",
				"price2":"0.244kg",
				"num":'x2'
			},
			{
				"img":"images/2_15.jpg",
				"tex":"[天猫超市] 达利园派巧克力味涂饰蛋芯饼20枚休闲食品好享受",
				"price1":"￥24.9",
				"price2":"0.6kg",
				"num":'x1'
			}
	 	]
	}
]


gulp.task('webserver',function(){
	gulp.src("gulp")
		.pipe(webserver({
			port:8008,
			middleware:function(req,res,next){
				res.setHeader("Access-Control-Allow-Origin","*");
				res.setHeader("content-type","application/json;charset=utf-8");
				res.write(JSON.stringify(data))
				res.end()
			}
		}))
})
gulp.task("default",["webserver"])