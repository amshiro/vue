var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:__dirname+"/src/main.js",
  output:{
    path:__dirname+"/dist",
    filename:"[name].js"
  },
  module:{
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ],
  devServer:{
    port:8088,
    hot:true,
    host:"localhost",
    setup(app){
      app.get("/some/path",function(req,res){
        
      })
    }
  },
  resolve:{
    alias:{
      "vue":"vue/dist/vue.js"
    }
  }
  // ,
  // proxy:{
  //     // "/ p://localhost:3000/"
  //     //     "/api": {
  //     //         target: "http://localhost:3000",
  //     //         pathRewrite: {"^/api" : ""},
  //     //         secure: false
  //       //     }
  //     '/ueditor':{
  //               //后台接口地址
  //               target: 'http://localhost:9999',
  //               //这里可以模拟服务器进行get和post参数的传递
  //               changeOrigin: true,
  //               //前端所有的/ueditor'请求都会请求到后台的/ueditor'路径之下
  //               pathRewrite: {
  //     '^/ueditor':'/ueditor'
  //               }
  //           }

  //   }

}