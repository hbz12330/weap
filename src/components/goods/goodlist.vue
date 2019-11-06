<template>
 <div class="app-goodlist">
   <div class="app-head">
        <div class="xht">
            <div class="mui-input-row mui-search">
                <form>
                <input type="search" name="title" v-model="title" class="mui-input-clear" placeholder="请输入产品名称">
                <span class="mui-icon mui-icon-search"  @click="search()"></span>
                </form>
            </div> 
        </div>
    </div>

   <div class="app-gooditem" v-for="item in list" :key="item.id" >
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
			<a class="mui-tab-item mui-active" @click="handleshoplist()">
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
</template>
<script>
import{Toast} from "mint-ui"
export default {
  data() {
    return {
      pno: 0,
      pageSize: 4,
      list: "",
      title:"",
      mylist:""
    };
  },
  mounted() {
    this.getMore();
  },
  methods: {
    search(){
      var title=this.title
		 if(!title){
			Toast("请输入您要搜索的商品名称") 
			return
		 }else{
			 this.$router.push("/seac?title="+title)
		 }
    },
   jumpInfo(e) {
  
      var id=e.target.dataset.id;
      var price=e.target.dataset.price;
      console.log(id);
      //this.$router.push("/goodinfo?lid="+lid);
      this.$router.push({path: '/goodinfo', query: {id:id,price:price}})
    },
    getMore() {
      this.pno++;
      var url = "http://127.0.0.1:3000";
      url += "/laptop?pno=" + this.pno;
      url += "&pageSize=" + this.pageSize;
      this.axios.get(url).then(result => {
        var rows = result.data.data;
        this.list = rows;
        console.log(this.list);
      });
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
};
</script>
<style>
.app-container .app-goodlist {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
}
.app-goodlist .app-head{
  position: relative;
  width: 100%;
  height:35px;
}
.app-goodlist .app-head .xht{
  width:100%;
	background:#ddd;
	height:35px;
  position: fixed;
}
.app-goodlist .app-head .xht div input{
  width: 90%;
  padding: 0;
  margin: 0;
}
.app-goodlist .app-gooditem img {
  width: 300%;
}
.app-goodlist .app-gooditem h3 {
  font-size: 18px;
  flex-direction: row;
}

.app-goodlist .app-gooditem {
  margin: 0;
  padding: 0;
  top: 40px;
  width: 50%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
}
.app-gooditem p em {
  float: left;
  color: #f0f;
  font-size: 12px;
  display: -webkit-box;
  width:65%;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:1;
  overflow: hidden;
}
.app-gooditem p i {
  float: right;
  background: red;
  color: #ffdd;
  margin-right: 5px;
}
</style>
