<template>
    <div class="app-or">
        <div class="app-t">
            <h4>订单管理</h4>
        </div>
        <div class="app-body">
            <ul>
                <li>待发货</li>
                <li>已发货</li>
                 <li>已完成</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.app-or .app-t{
    text-align: center;
    background: #ddd;
    color: #556622;
}
.app-or .app-t h4{
    margin: 0;
    padding: 6px;
}
.app-body ul{
    background: #eee;
    list-style: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 18px;
}
.app-body ul li{
     background: #999999;
    color: white;
    padding: 10px;
}
</style>

