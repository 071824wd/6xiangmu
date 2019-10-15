<template>
    <div>
        <div class="lunbo">
            <wc-swiper v-if ='list.lunbo' class='swp'>
                <wc-slide class="a-1" v-for='(item,index) in list.lunbo' :key='index'>
                    <img :src="item" alt="">
                </wc-slide>
            </wc-swiper>
        </div>
        <div class="xiaoicon">
           <div class="a-2" v-for="(item,index) in list.nav" :key="index">
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
            </div> 
        </div>
        <!-- <div>
            <wc-swiper v-if ='list.xinwen' class='adc'>
                <wc-slide class="a-1" v-for='(item,index) in list.xinwen' :key='index'>
                    <p>{{item}}</p>
                </wc-slide>
            </wc-swiper>
        </div> -->
        <div class="hsy-a1">
            <div>
                <p>新闻简报</p>
                </div>
            <div></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'App',
    data() {
    return {
        //轮播图
        list:{}
    }
  },
  methods: {
      
  },
  created() {
        this.$http.get('./data.json').then(res=>{
            // console.log(res.data)  
            this.list=res.data
        })
  }
}
</script>
<style>
.a-1>img{
    width: 100%;
}
.xiaoicon{
    display:flex;
    flex: 1;
    padding: .1rem;
}
.a-2{
    text-align: center;
}
.a-2>p{
    font-size:.13rem; 
}
.a-2>img{
    width:50%;
    padding: 0 0 .08rem 0;
}
.hsy-a1{
    height: 0.4rem;
    background:#d1d1d1;
}
/* 轮播 */
</style>