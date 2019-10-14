<template>
    <div class="footer">
        <ul>
            <router-link to="/shou" tag="li">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <a href="#">首页</a>
            </router-link>
            <router-link to="/faxian" tag="li">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <a href="#">发现</a>
            </router-link>
            <router-link to="/cart" tag="li">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <a href="#">购物车</a>
            </router-link>
            <router-link to="/wode" tag="li">
                 <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <a href="#">我的</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .footer{
        width: 100%;
        height: 60px;
        border-top: 1px solid rgb(226, 226, 226);
        position: fixed;
        bottom: 0px;
        background: white;
    }
    .footer ul{
        display: flex;
    }
    .footer ul li{
        width: 25%;
        height: 60px;
    }
    .footer ul li .icon{
        width: 25px;
        height: 25px;
        fill: currentColor;
        display: block;
        padding-top: 5px;
        margin: 0px auto;
    }
    .footer ul li a{
        display: block;
        text-decoration: none;
        color: black; 
        font-size: 16px;
        padding-top: 4px;
        text-align: center;
    }

</style>
