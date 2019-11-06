<template>
<div class="app-goodlist">
   <div class="app-thea">
        <div class="xht">
            <div class="mui-input-row mui-search">
                <h4>商品推荐</h4>
            </div> 
        </div>
    </div>

   <div class="app-gooditem" v-for="item in list" :key="item.id">
        <img :src="'http://127.0.0.1:3000/'+item.lpic" :data-id="item.id"  @click="jumpInfo">
        <p>
        <em>{{item.title}}</em> 
        <i>¥{{item.price}}</i>
        </p>

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
      uid:1,
      list:""
    }
  },
  mounted(){
    //自动加载
        var url="http://127.0.0.1:3000";
        url+="/recommend?pid="+this.uid;
        this.axios.get(url).then(result=>{
        var rows=result.data.data;
        this.list=rows
        console.log(this.list) 
        })
  },
 methods:{
   jumpInfo(e){
     var id=e.target.dataset.id;
      var price=e.target.dataset.price;
      console.log(id);
      //this.$router.push("/goodinfo?lid="+lid);
     this.$router.push({path: '/goodinfo', query: {id:id,price:price}})
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
    },
     handleClick(){
      this.$router.push("/home")
      },
      handleshoplist(){
      this.$router.push("/goodlist")
      },
      me(){
        var url="http://127.0.0.1:3000/concart";
       this.axios.get(url).then(result=>{
       if(result.data.code==1){
         this.$router.push("/me")
       }else{
         this.$router.push("/login")
       }
     })
      }
  }
}
</script>
<style>
.app-goodlist .app-thea{
    position:relative;
    width:100%;
    height:30px;
}
 .app-goodlist .app-thea .xht{
     background:#ffdd;
     height:30px;
     position:fixed;
     top:0;
     width:100%;
	text-align:center;
}
.xht div h4{
  color: cornflowerblue;
}
.app-goodlist{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:2px;
    margin-bottom:1000px;
}
.app-goodlist .app-gooditem img{
    width:100%;
}
.app-goodlist .app-gooditem h3{
    font-size:18px;
    flex-direction:row
}
.app-goodlist .app-gooditem{
    margin:0;
    padding:0;
    top:40px;
    width:49%;
    border:1px solid #ccc;
    box-shadow:0 0 8px #ccc;
}
.app-gooditem p em{float:left;color:#f0f; font-size:12px;}
.app-gooditem p i{float:right;background:red;color:#ffdd;margin-right:5px;}
</style>