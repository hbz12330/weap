<template>
 <div class="app-home"> 
   <div class="thb">
		<div class="ht">
			<div class="mui-input-row mui-search">
				<form>
				<input type="search" name="title" v-model="title" placeholder="请输入产品名称">
				<span class="mui-icon mui-icon-search" @click="search()"></span>
				</form>
			</div>
		</div>
	</div>
	<!--轮播图-->
	<mt-swipe>
		<mt-swipe-item v-for="item in list" :key="item.id">
			<img :src="item.img_url">
		</mt-swipe-item>
	</mt-swipe>
	<div class="mui-content">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 	   mui-col-sm-3">
				  <router-link to="/goodlist"> 
					<img src="img/0.ico"/>
					<div class="mui-media-body">全部商品</div>
				  </router-link>
				</li>
				  
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					 <router-link to="/rcm">
					<img src="img/1.ico"/>
					<div class="mui-media-body">推荐商品</div>
					</router-link>
					</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a @click="scart()">
					<img src="img/2.ico"/>
					<div class="mui-media-body">购物车</div>
					</a>
					</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"> 
					<a @click="me()">
					<img src="img/3.ico"/>
					<div class="mui-media-body">会员中心</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<img src="img/4.ico"/>
					<div class="mui-media-body">我的订单</div>
					
					</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<img src="img/5.ico"/>
					<div class="mui-media-body">新品预售</div>
					
					</li>
		</ul> 
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" @click="handleClick()">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" @click="handleshoplist()">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">全部商品</span>
			</a>
			<a class="mui-tab-item" @click="scart()"> 
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
               <span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" @click="me()">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
	</div>
		
 	</div>
</template>
<script>
import{Toast} from "mint-ui"
export default {
    data(){
        return{
		   list:[],
		   title:""
        }
    },
    methods:{
		search(){
		 var title=this.title
		 if(!title){
			Toast("请输入您要搜索的商品名称") 
			return
		 }else{
			this.$router.push("/seac?title="+title)
		 }
		},
	 me(){
		  var url="http://127.0.0.1:3000/me";
            this.axios.get(url).then(result=>{
				//console.log(result.data.code);
                if(result.data.code==1){
                 this.$router.push("/me")
                }else{
                 this.$router.push("/login")
                }
             })
	   },
     handleImage(){
		 var url="http://127.0.0.1:3000/imagelist";
		 this.axios.get(url).then(result=>{
			 this.list=result.data;
			 console.log(result.data)
		 });
	 },
	 handleClick(){
		this.$router.push("/home")
	 },
	 handleshoplist(){
		this.$router.push("/goodlist")
	 },
	 scart(){
		 var url="http://127.0.0.1:3000/concart";
     this.axios.get(url).then(result=>{
       if(result.data.code==1){
         this.$router.push("/shopCart")
       }else{
         Toast("请登录");
       }
     })
	 }
    },
	created() {
		this.handleImage();
	},
	delhame(){
		this.$router.push("/me") 
	}
}
</script>
<style>
.thb{position:relative;height:35px;}
.thb .ht{
	width:100%;
	background:#ddd;
	height:35px;
}
.thb .ht input{width:90%}
.app-home .mint-swipe{
   height:165px;
 }
 .app-home .mint-swipe img{
   width:100%;
 }
 .mui-content ul li img{width:74px}
</style>
