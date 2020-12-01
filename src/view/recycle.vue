<template>
    <div class="recycle-wrap">
        <item v-for="(item, index) in data.recycleItems"
              :key="index"
              :index="index"
              :item="item"
              @handle-check="handleCheck">
            <a class="delete"
               @click="handleRecycle(index,item)">恢复</a>
        </item>
        <div v-if="data.recycleItems.length === 0"
             class="no-data">
            暂无数据
        </div>
        <button @click="changeRef">
            改变ref的值
        </button>
        <button @click="changeName">
            改变name的值
        </button>
    </div>
</template>

<script>
import {
    onMounted, reactive, watch, ref,
} from 'vue';
import item from '@/components/item';
// import utils from '../utils';

export default {
    components: {
        item,
    },
    setup() {
        const data = reactive({
            recycleItems: [],
            name: '',
        });
        const refDom = ref(0);
        function handleCheck(e) {
            data.recycleItems[e].checked = !data.recycleItems[e].checked;
        }
        function handleRecycle(i, citem) {
            data.recycleItems.splice(i, 1);
            window.mitt.emit('addRecycle', citem);
        }
        // function storeItems(array) {
        //     utils.setItem('recycleList', array);
        // }
        const stop = watch(() => {
            console.log(data.recycleItems, refDom.value, data.name);
        });
        function changeRef() {
            refDom.value = '123';
        }
        function changeName() {
            stop();
            data.name = 'zzd';
        }
        watch(
            () => {
                // console.log(data.recycleItems, refDom.value);
            },
        );

        onMounted(() => {
            window.mitt.on('addDelete', (obj) => {
                const array = [];
                data.recycleItems.forEach((citem) => {
                    array.push(citem);
                });
                array.push(obj);
                data.recycleItems = array;
            });
        });
        return {
            data,
            changeRef,
            changeName,
            handleCheck,
            handleRecycle,
        };
    },
};
</script>

<style lang="less">
.recycle-wrap {
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: #f8f8f8;
    .no-data {
        text-align: center;
        color: #ddd;
    }
}
</style>
