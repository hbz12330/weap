<template>
     <div class="app-login">
        <h3>绿叶会员注册</h3>
        <div class="dr">
          <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
                          <form>
                              <input type="text" name="uname" v-model="uname" placeholder="请输入用户名"/>
                              <input type="password" name="upwd" v-model="upwd" placeholder="请输入用户密码"/>
                              <input type="password" name="upws" v-model="upws" placeholder="请输入确认密码"/>
                              <input type="button" value="立即注册" id="btn" @click="butrest()" >
                          </form>
                          <a href="javascript:;" @click="logind()">去登陆</a>
                          <span>找回密码</span>
            </div>
          </div>
        </div>
      </div>
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">全部商品</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
               <span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item mui-active" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label ">我的</span>
			</a>
		</nav>
    </div>
</template>
<script>
import{Toast} from "mint-ui"
export default {
    data(){
      return{
        uname:"",
        upwd:"",
        upws:""
      }
    },
    methods:{
     butrest(){
       //获取用户输入的用户名和密码
       var uname=this.uname
       var upwd=this.upwd
       var upws=this.upws
       console.log(upws)
      //验证用户名不能和密码不能为空
      var reg=/^[a-z0-9A-Z]{6,18}$/i;
      if(!reg.test(uname)){
        Toast("用户名格式不正确！")
        return;
      };
      var reg=/^[a-z0-9A-Z]{8,25}$/i;
      if(!reg.test(upwd)){
        Toast("用户密码格式不正确！")
        return;
      }else if(upwd!=upws){
        Toast("密码和确认密码不一致，请重新输入！")
        return;
      }else{
          var url="http://127.0.0.1:3000/butrest?uname="+uname+"&upwd="+upwd;
           this.axios.post(url).then(result=>{
                //console.log(result.data.code);
                if(result.data.code==1){
                    this.$router.push("/login")
                }else{
                    Toast("该用户已经存在，不能再注册！")
                    return;
                }
            })
      }
     },
     logind(){
       this.$router.push("/login")
     }
    }
}
</script>
<style>
 .app-login>h3{
    width: 100%;
    padding-top: 5px;
    text-align: center;
    font-size: 25px;
    } 
    #btn{width: 100%;
    font-size: 15px;
    background: #a23400;
    color:#272727;
    border-radius:20px;
    }  
    .mui-card-content-inner{text-align:right}
    .mui-card-content-inner span{margin-left: 25px}
   .mui-card{margin:200px;}
  
</style>
