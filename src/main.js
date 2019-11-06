import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入mint-ui样式文件
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import {Button} from 'mint-ui'
import axios from "axios"
import {Swipe,SwipeItem,Navbar,TabItem, TabContainer, TabContainerItem,Cell} from "mint-ui"
//7.1:加载第三方模块  qs
import qs  from "qs";
//7.2:配置qs模块，qs成功Vue属性
Vue.prototype.qs = qs;
axios.defaults.withCredentials=true;
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Navbar.name,Navbar);
Vue.component(TabItem.name,TabItem);
Vue.component(TabContainer.name,TabContainer);
Vue.component(TabContainerItem.name,TabContainerItem);
Vue.component(Cell.name,Cell);
Vue.component(Button.name,Button)
Vue.prototype.axios=axios;
Vue.filter("datetimeFilter",function(val){
  //8.1:创建日期对象
  var date = new Date(val); 
  //8.2:获取年 月 日 时 分 秒
  var y = date.getFullYear();  //年份
  var m = date.getMonth()+1;  //月份0~11
  var d = date.getDate();     //日
  //8.3:返回字符串 y-m-d h:mi:s
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d}`;
});








new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
