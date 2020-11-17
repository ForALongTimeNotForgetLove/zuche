<template>
    <div id="set">
        <heads :title="title"></heads>
        <ul>
            <li>
                <span>修改密码</span>
                <img src="./image/返回.png" alt="">
            </li>
            <li>
                <span>忘记密码</span>
                <img src="./image/返回.png" alt="">
            </li>
            <li>
                <span>关于我们</span>
                <img src="./image/返回.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import heads from './../head'
export default {
    props: {

    },
    data() {
        return {
            title:'设置'
        };
    },
    methods: {

    },
    components: {
        heads
    },
};
</script>

<style scoped lang="less">
#set{
    ul{
        margin-top: 1.4rem;
        li{
            font-size: .36rem;
            padding: 0 .24rem;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1rem;
            font-weight: 600;
            img{
                width: .18rem;
                height: .36rem;
                
            }
        }
    }
}
</style>
