/*
 * @Author: zhifen.zhu
 * @Email: zhuzhifen_zzf@163.com
 * @Date: 2020-08-11 11:25:54
 * @Last Modified by: zhifen.zhu
 * @Last Modified time: 2020-08-24 15:21:24
 * @Description: Description
 * @Route: Route
 */

<template>
    <div>
        输入的msg的值为： {{msg}}
        我的color： {{color}}
    </div>
</template>

<script>
import { ref, watchEffect, onMounted } from 'vue'
export default {
    props: {
        msg: String,
    },
    setup(props) {  // 在beforeCreate之前调用
        const val = ref(0)
        const getName = () => {
            val.value = 8
        }
        onMounted(() => {
        })
        watchEffect(() => {
            console.log(props.msg, '9090909090');
        })
        return {
            val,
            getName
        }
    },
}
</script>

<style>
</style>
