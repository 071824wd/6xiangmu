<template>
    <div class="footer">
        <router-link to="/shou" tag="p">首页</router-link>
        <router-link to="/faxian"  tag="p">发现</router-link>
        <router-link to="/cart"  tag="p">购物车</router-link>
        <router-link to="/wode"  tag="p">我的</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .footer{
        width: 100%;
        height: 1.14rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
