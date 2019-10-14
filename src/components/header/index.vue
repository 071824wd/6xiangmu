<template>
    <div class="header">
        <div><img src="/log.jpg" alt=""></div>

        <h1>头部</h1>
        <div>
            <input type="text"/>
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style>
    .header{
        width: 100%;
        height: 2.4rem;
        padding: 0 .24rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       
    }
    .header img{
        width: 100%;
    }
    .header input{
        width: 100%;
        height: .55rem;
         background: #f7f7f7;
        border-radius:20px;
        border:none;
    }
</style>