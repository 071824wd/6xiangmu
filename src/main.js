import Vue from 'vue'
import App from './App.vue'
// import '../public/rem'
import '../public/css/a.css'
//引入轮播图插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)
//上下轮播插件
//与vue集成
import Axios from 'axios'
Vue.prototype.$http=Axios



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
