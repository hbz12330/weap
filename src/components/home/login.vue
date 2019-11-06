<template>
     <div class="app-login">
       <div class="headr">
        <h3>绿叶会员登录</h3>
        </div>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <form>
                             <input type="text" id="p1" name="uname" v-model="uname" placeholder="请输入用户名"/>
                            <input type="password" id="p2" name="upwd" v-model="upwd" placeholder="请输入用户密码"/>
                             <input type="button" value="立即登录" id="btn" @click="butlogin"/>
                        </form>
                        <a href="javascript:;" @click="regst()">立即注册</a>
                        <span>找回密码</span>
					</div>
				</div>
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
import{Toast} from "mint-ui"
    export default {
    data() {
      return {
        uname:"",
        upwd:""
      }
    }, 
  methods: {
     regst(){
       this.$router.push("/regst")
     },
     butlogin(){
       //获取用户输入的用户名和密码
       var u=this.uname
       var p=this.upwd
       //验证不能为空
       var reg=/^[a-z0-9]{3,12}$/i;
       if(!reg.test(u)){
         Toast("用户名格式不正确!")
         return;
       }
       //发送ajax请求
       var url="http://127.0.0.1:3000/";
            url+="login?uname="+u+"&upwd="+p;
            this.axios.post(url).then(result=>{
                //console.log(result.data.code);
                if(result.data.code==1){
                  this.$router.push("/home")
                }else{
                    Toast("用户名或者密码错误！");
                }
            })
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
 .headr{
   height:35px;
   text-align:center;
   background:#ddd;
   padding:1px;
    } 
    .headr h3{height:25px;font-size:20px;}
    #btn{width: 100%;
    font-size: 15px;
    background: #a23400;
    color:#272727;
    border-radius:20px;
    }  
    .mui-card-content-inner{text-align:right}
    .mui-card-content-inner span{margin-left: 25px}
    .mui-card-content-inner form #btn{font-size: 18px;color: white}
    .mui-card-content-inner form #p1{
      border-bottom: 1px solid #ddd;
      border-top:0;
      border-left: 0;
      border-right: 0;
      }
      .mui-card-content-inner form #p2{
      border-bottom: 1px solid #ddd;
      border-top:0;
      border-left: 0;
      border-right: 0;
      }
</style>
