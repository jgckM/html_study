<template>
    <ul>
        <li v-for="data in cinemasList" :key="data.cinemaId">
            <div class="left">
                <div class="name">{{ data.name }}</div>
                <span class="address">{{ data.address }}</span>
            </div>
            <div>
                <div style="color: red; font-size: 12px">
                    ￥{{ data.lowPrice / 100 }}起
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
// mapState映射状态 mapActions映射方法 mapMutations映射 直接用 this 调用映射到本地的方法和属性
export default {
    computed: {
        ...mapState(['cinemasList'])
    },
    methods: {
        // ...mapMutations(['clearCinemaList'])
    }
}
</script>
<style lang="scss" scoped>
li {
    display: flex;
    justify-content: space-between;
    padding: 0.8333rem;
    .name {
        font-size: 15px;
        color: #191a1b;
    }
}
.left {
    width: 13.8889rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.address {
    font-size: 12px;
    margin-top: 5px;
    color: #797d82;
}
.box {
    // height:34.3333rem;
    overflow: hidden;
    position: relative;
    // 修正滚动调的位置
}
</style>
