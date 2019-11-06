<template>
<div class="mui-card">
    <div class="dt" v-for="tem in list" :key="tem.id">
      <img :src="'http://127.0.0.1:3000/'+tem.pic">
     <div class="dgq">
      <h3>当前登录会员：{{tem.uname}}</h3>
     </div>
    </div>
    <div class="mui-card-content">
        <ul>
         <li>密码修改</li>
         <li>订单管理</li>
         <li>个人信息</li>
        </ul> 
    </div>
    <div>
        <button @click="esc()">退出登录</button>
    </div>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" @click="handleClick()">
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
			<a class="mui-tab-item mui-active" @click="me()">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
</div>
</template>
<script>
  export default {
    data(){
		return{
			list:{}
		}
    },
    mounted() {
     var url="http://127.0.0.1:3000/me";
     this.axios.get(url).then(result => {
     var rows = result.data.data;
     this.list = rows;
     console.log(this.list);
      });
    },
    methods:{
     esc(){
        var url="http://127.0.0.1:3000/esc";
         this.axios.get(url).then(result => {
           if(result="undefined"){
             this.$router.push("/login")
           }
            
        });
      },
      handleClick(){
      this.$router.push("/home")
      },
      handleshoplist(){
      this.$router.push("/goodlist")
      },
      scart(){
        this.$router.push("/shopcart")
      },
      me(){
        this.$router.push("/me") 
      }
    }
  }
</script>
<style>
.app-container .mui-card .dt{
width: 100%;
text-align: center;}
.app-container .mui-card .dt img{
  width: 120px;
  height: 120px;
}
.dgq h3{
      font-size: 20px;
    font-stretch: condensed;
    color: #336699;
}
.mui-card-content ul{
    background: #eee;
    list-style: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 18px;
}
.mui-card-content ul li{
    background: #999999;
    color: white;
    padding: 10px;
}
.mui-card div button{
    width: 100%;
    background: yellowgreen;
    padding: 10px;
}
</style>