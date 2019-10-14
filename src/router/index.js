import  Vue from 'vue'
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

import Shou from '../paser/shou.vue'
import Cart from '../paser/cart.vue'
import Wode from '../paser/wode.vue'
import Faxian from '../paser/faxian.vue'
const routes=[
    {path:"/",redirect:"/shou"},
    {path:"/shou",component:Shou},
    {path:"/cart",component:Cart},
    {path:"/wode",component:Wode},
    {path:"/faxian",component:Faxian},
]
const router=new VueRouter({
    routes,
    linkActiveClass:"lunyou"
})
export default router