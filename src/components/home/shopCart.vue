<template>
<div class="app-cart">
	<div class="ding">
		<div class="app-lg">	
		 	<h3>我的购物车</h3>
		</div>
	</div>
	<div class="card">
	 <div class="chb"> 
				<h4><input type="checkbox" @click="selectAll" :checked="allcb">全选</h4>

		</div>
		 <div class="scar" v-for="(item,i) in list" :key="item.id" >
			<div class="ddre">
				<input type="checkbox" :checked="item.cb" :data-i="i" @click="modifyItem"/>
			</div>	
			<div class="dimg">
			<img :src="'http://127.0.0.1:3000/'+item.lpic">
			</div>
			<div class="text-juy">
			{{item.title}}
			</div>
			<div class="text-shuliang">
			{{item.num}}
			</div>
			<div class="text-jiage">
			{{item.price}}
			</div>
			<div class="text-shanchu">
			
			<button @click="del" :data-uid="item.id" :data-idx="i">删除</button>
			</div>
		</div> 
	
		
	</div>
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item" href="#tabbar">
			商品总价：
			<span class="mui-tab-label">¥：{{price.toFixed(2)}}</span>
		</a>
		<a class="lk mui-tab-item" href="#tabbar-with-map" style="text-align:right;padding-right:10px">
			<mt-button type="danger">去付款</mt-button>
		
		</a>
	</nav> 
  </div>
</template>
<script>
import{Toast} from "mint-ui"
export default {
	data(){
		return{
			list:{},	
			cb:false,
			allcb:false,
			price:0
		}
	},
	mounted(){
		var url = "http://127.0.0.1:3000/cart";
       this.axios.get(url).then(result => {
		var rows = result.data.data;
		for(var item of rows){
			item.cb=false;
		}
        this.list = rows;
      });
	},
	methods:{
		del(e){
			//获取当前购物车商品id
			var id=e.target.dataset.uid;
			var idx=e.target.dataset.idx;
			var url="http://127.0.0.1:3000/del?id="+id;
			this.axios.get(url).then(result=>{
				if(result.data.code==1){
					Toast("删除商品成功");
					this.list.splice(idx,1)
				}
			})
		},
		selectAll(e){
			var cb=e.target.checked;
			this.allcb=cb;
			for(var tem of this.list){
				tem.cb=cb;
			}
			for(var i=0;i<this.list.length;i++){
				if(cb==true){
				this.price+=this.list[i].price*this.list[i].num	
				}else if(cb==false){
					this.price=0
				}
			}
		},
		modifyItem(e){
			//获取元素下标
			var idx=e.target.dataset.i;
			//将下标对象数组中的元素cb修改当前复选框状态
			var checked=e.target.checked;
			this.list[idx].cb=checked;
			var count=0;
			for(var item of this.list){
				if(item.cb){
					count++;
				}
			}
			if(count==this.list.length){
				this.allcb=true;
			}else{
				this.allcb=false;
			}
			if(checked==true){
			 this.price+=this.list[idx].price*this.list[idx].num
			}else{
				this.price-=this.list[idx].price*this.list[idx].num	
			}

		}
	}
}
</script>
<style>
	.app-container .app-cart{
	  margin-bottom: 50px;
	}
	.app-cart .ding{
		 position: relative;
         width: 100%;
         height:35px;
	}
	.app-cart .ding .app-lg{
		position: fixed;
		text-align: center;
		width: 100%;
		background: rgb(36, 155, 42);
	}
	.app-cart .ding .app-lg h3{
		font-size: 18px;
		color: darkcyan;
	}
	.app-cart .card .scar{
	  display:flex;
	  padding-left: 2px;
	 
	}
	.app-cart .card .scar .dimg{
		width:80px;

	}
	.app-cart .card .scar .dimg img{
		width: 100%
	}
	.app-cart .card .scar .ddre{
		height:100%;
        line-height: 73px;
		padding: 0;
		margin: 0
		
	}
	.app-cart .card .scar .text-juy{
		height:100%;
		padding: 0;
		margin: 0;
		 line-height:73px; 
		display: -webkit-box;
		width:50%;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;
		overflow: hidden;
	}
	.app-cart .card .scar .text-shuliang{
		height:100%;
        line-height: 23px; 
		padding: 0;
		margin: 0
	}
	.app-cart .card .scar .text-jiage{
		height:100%;
        line-height: 23px;
		padding: 0;
		margin: 0
	}
	.app-cart .card .scar .text-shanchu{
		height:100%;
		padding-top:16px;
		margin: 0
	}
</style>

