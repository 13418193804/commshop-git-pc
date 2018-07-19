<template>
<div class="bodywrapper">
     <headertop><h3>搜索</h3></headertop>
     <div class="banner"><img :src="imgsrc+'mt-user-bg.png'"></div>
     <div class="search_box">
     	   <div class="search_txt">
 
     	   	    <input type="text" @focus="handleinput()" v-model="searchtxt" placeholder="请输入搜索内容" />
 
     	   	    <span class="search_box_delete" v-show="searchtxt" @click="searchtxtclear"><img :src="imgsrc+'mt-close.png'"></span>
     	   </div>
     	   <button id="Subm" @click="Subm()">搜索</button>
     </div>
     <!--热门搜索-->
     <div class="sear_recomend clearfix">
     	   <ul>
     	   	  <li v-for="(item,index) in hottxt" :class="{ on:index==0}" @click="hotsearch(item)">{{item}}</li>     	   	  
     	   </ul>
     </div>
     <div class="sear_history clearfix" v-show="historyxs">
     	  <ul class="his_ulcon">
     	  	  <p @click="clearhis()">清空历史记录</p> 
     	  </ul>
     </div>     
</div>
</template>
<script>
import {goback} from 'static/js/public.js'  //引用通用方法
import commonstate from 'static/js/publicstate.js' //引用公共常量
import {saveSearch} from 'static/js/cache.js'  //引用本地存储js
import storage from 'good-storage'  //引入good-storage包
import axios from 'axios'    
import $ from 'jquery'
export default{
	data(){
	  return {
			imgsrc:commonstate.staticimg,
			searchtxt:'',      //input框输入字符v-model双向绑定
			historyxs:false,  //历史记录显示与不显示控制
			hottxt:''    //热门搜索
		}
	 },
	methods:{
	 	searchtxtclear(){   //清空小叉号
	 		this.searchtxt='';
	 	},
	 	Subm(){ //点击搜索
	 	   if(this.searchtxt!=''){ //搜索框不为空
	 		  saveSearch(this.searchtxt); // 本地存储搜索的内容
	 		    this.$router.push({ 
	                      path: '/searchlist'
                          });
                this.historyxs=false;
                this.searchtxt='';
	 		}	 		
	 	},
	 	handleinput(){	 	//输入框获取焦点显示搜索历史记录	
	 		//为避免重复先清空再添加
	 		$('.his_ulcon').children('li').remove();
	 		let searches=storage.get('_search_');
	 		if(searches!=undefined){
	 			this.historyxs=true; 		
	 		    for(var i=0;i<searches.length;i++){
	 			   $('.his_ulcon p').before(`<li @click="hotsearch(searches[i])">${searches[i]}<li>`)
	 		    }
	 		}
	 			 			 		
	 	},
	 	clearhis(){  //清空历史记录
	 		storage.remove('_search_');
	 		$('.his_ulcon').children('li').remove();
	 	},
	 	hotsearch(item){	//点击热门搜索把搜索的记录添加到good-storage中并跳转搜索列表页 		
	 		saveSearch(item);
	 		this.$router.push({
	              path: '/searchlist'
                });
            this.historyxs=false;
	 	}
	 },
	 watch:{
	 	'searchtxt':function(){  
                  //监听输入内容向后台请求数据
                  console.log('数据改变触发相应事件');
         }
	 },
	created(){
		axios.get('http://172.16.2.43:8080/static/data/search.json').then((res)=>{
			console.log(res.data);
			this.hottxt=res.data.hotsearch;
		})
	},
	components:{
	 	 headertop
	 }
}
</script>