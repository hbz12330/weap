<template>
    <div class="app-ggoinfo">
        <div class="app-cds">
            <div class="app-cds-a">
                <div class="goinfo">商品详情</div>
                <div class="mui-tru" v-for="item in list" :key="item.lid">
                <img :src="'http://127.0.0.1:3000/'+item.lpic"></div>
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">商品参数</mt-tab-item>
                    <mt-tab-item id="2" @click.native="huoqu">商品详情</mt-tab-item>
                    <mt-tab-item id="3" @click.native="pingjia">用户评价</mt-tab-item>
                </mt-navbar>
            </div>        
        </div>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <div v-for="item in list" :key="item.lid">
                  <div class="kj">
                      <bdo>商品名称：{{item.title}}</bdo>
                  </div>
                    <div class="kk"> 
                        <div class="df">
                            <span class="let">成分：{{item.standar}}</span>
                            <span class="lee">适用肤质：{{item.typ}}</span>
                        </div>
                        
                        <div class="kj">
                            <span class="let">功效：{{item.nsy}}</span>
                            <span class="lee">产地：{{item.pdc}}</span>
                       </div>
                       <div class="gfd">
                           <span class="let">有效期：{{item.vad}}</span>
                       </div>
                        
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" >
              <div class="ddg">
                  <img :src="'http://127.0.0.1:3000/'+tem.img_dg"  v-for="tem in obj" :key="tem.pid">
              </div>
            </mt-tab-container-item>
             <mt-tab-container-item id="3" >
              <ul>
                  <li v-for="tem in mylist" :key="tem.id">
                      <span style="float:left">{{tem.cont}}</span>
                      </li>
              </ul>
            </mt-tab-container-item>
        </mt-tab-container>
        
        <!---->
      <nav class="mui-bar mui-bar-tab" v-for="item in list" :key="item.lid">
			<code class="mui-tab-item mui-active" >
				<h4>价格¥:{{item.price}}</h4>
			</code>
			<code class="mui-tab-item">
				<button @click="addcart">加入购物车</button>
			</code>
		</nav>
	</div>
    
</template>
<script>
import{Toast} from "mint-ui"
export default {
    data() {
        return {
            selected: "1",
            lid:this.$route.query.id,
            list:{},
            obj:{},
            mylist:{},
            arry:""
        }
    },
    mounted() {
       var lid=this.$route.query.id;
        console.log("这里是："+lid)
        var url="http://127.0.0.1:3000/deta?lid="+lid
        this.axios.get(url).then(result => {
        var rows = result.data.data;
        console.log(rows)
        this.list = rows;
      });

    
    } ,
    methods:{
        addcart(e){
          var pid=this.$route.query.id;
          var price=this.list[0].price;
          console.log(pid+"--"+price)
          var url="http://127.0.0.1:3000/addcart?";
          url+="pid="+pid;
          url+="&price="+price;
          console.log(url)
             this.axios.get(url).then(result=>{
			  if(result.data.code==1){
                  Toast(result.data.msg);
                }else{
                   Toast(result.data.msg);
                }
            })
        },
        huoqu(e){
           var pid=this.$route.query.id;
           var url="http://127.0.0.1:3000/detals?pid="+pid
           this.axios.get(url).then(result=>{
            var rows=result.data.data;
            this.obj=rows;
            console.log(this.obj);
           })
        },
        pingjia(e){
            var uid=this.$route.query.id;
            var url="http://127.0.0.1:3000/info?uid="+uid;
            console.log(url)
            this.axios.get(url).then(result=>{
             var rows=result.data.data;
             this.mylist=rows;
              console.log(this.mylist);   
            })
        }
    } 
}
</script>
<style>
.app-container{padding: 0}
.app-ggoinfo{margin-bottom: 38px}
    .mui-bar-tab div button{
        float: right
    }
    .app-ggoinfo .app-cds .app-cds-a .goinfo{
     margin: 0;
     text-align: center;
     padding: 0;
     width:100%;
     background:#ddd;
}
    .mui-bar-tab div button{padding-top: 50px}
   .app-ggoinfo .mui-tru img{
    width: 100%;
     margin-top: 0;}
     .mint-navbar{top:0}
     .app-container .app-ggoinfo nav div button{
         background: #ff0;
     }
     .app-container .app-ggoinfo nav div code{padding-bottom: 2px}
     .app-ggoinfo nav code h4{float: left;}
     .app-ggoinfo nav code button{float: right}
     .ddg img{width: 95%;margin-top: -5px;}
     .mint-tab-container{margin: 0;text-align: center}
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div .kj{
         font-size:14px;
         text-align: left;
         width: 100%; 
     }
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div .kk .df .let{
         float: left;
         width: 50%;
        text-align:left;
        font-size: 14px;
     }
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div .kk .df .lee{
         float: right;
        width: 50%;
        text-align: right;
        font-size: 14px;
     }
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div .kk .kj .let{
         float: left;
         width: 50%;
        text-align:left;
        font-size: 14px;
     }
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div .kk .kj .lee{
         float: right;
        width: 50%;
        text-align: right;
        font-size: 14px;
     }
     .mint-tab-container .mint-tab-container-wrap .mint-tab-container-item div .kk .gfd .let{
         float: left;
         width: 100%;
        text-align:left;
        font-size: 14px;
     }
     .app-ggoinfo .app-cds{
         position: relative;
         width: 100%;
         height:336px;
         text-align: center;
         }
      .app-ggoinfo .app-cds .app-cds-a{
          position: fixed;
          z-index: 99;
          width: 100%;
          background: #ddd;
         
      }
      .app-ggoinfo .app-cds .app-cds-a img{width:100%}
      .mui-tru{
          height:265px;
          
      }
      .mui-tru img{
         
          height: 100%;
      }
      .mint-tab-container-item ul{
          margin:0;
          font-size: 16px;
          padding-left: 5px;
         list-style: none; 
         text-align: left
          }
        .mint-tab-container-item{
         margin-bottom:15px;
        }
</style>
