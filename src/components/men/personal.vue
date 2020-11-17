<template>
    <div id="personal">
        <heads :title="title"></heads>
        <ul>
            <li>
                <span>头像</span>
                <div>
                    <img src="./image/头像.png" alt="" class="personal_tou">
                    <img src="./image/返回.png" alt="" class="personal_right">
                </div>
            </li>
            <li>
                <span>账号</span>
                <div>
                    PJ-123456
                </div>
            </li>
            <li>
                <span>姓名</span>
                <div>
                    李云龙
                </div>
            </li>
            <li>
                <span>证件</span>
                <div>
                    身份证
                </div>
            </li>
            <li>
                <span>证件号</span>
                <div>
                    410402*******125
                </div>
            </li>
            <li>
                <span>手机号</span>
                <div>
                    123456****121
                </div>
            </li>
        </ul>
        <p>
            <van-icon name="warning" color='#ee1d1d' size='.2rem'/>
            手机号变更需本人携带身份证到门店办理
        </p>
        <button @click="quit">退出登录</button>
    </div>
</template>

<script>
import heads from './../head'
export default {
    props: {

    },
    data() {
        return {
            title:'个人中心'
        };
    },
    methods: {
        quit(){
            this.$router.push('/login')
        }
    },
    components: {
heads,
    },
};
</script>

<style scoped lang="less">
#personal{
    
    font-size: .28rem;
    margin-top: 1.4rem;
    ul{
        li{
            border-bottom: 1px solid #e0e0e0;
            height: 1rem;
            padding: 0 .24rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                display: flex;
                align-items: center;
                .personal_tou{
                    width: .8rem;
                    height: .8rem;
                    margin-right: .3rem;
                }
                .personal_right{
                    width: .18rem;
                    height: .36rem;
                }
            }
        }
    }
    p{
        margin-top: .38rem;
        text-align: right;
        font-size: .18rem;
        color: #999999;
        padding: 0 .24rem;
        margin-bottom: 1rem;
    }
    button{
        color: #fff;
        font-size: .36rem;
        font-weight: bolder;
        width: 5rem;
        height: 1rem;
        background-color: #43a5ff;
        border-radius: .08rem;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
