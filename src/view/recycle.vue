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
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import item from '@/components/item';

export default {
    components: {
        item,
    },
    setup() {
        const data = reactive({
            recycleItems: [],
        });
        function handleCheck(e) {
            data.recycleItems[e].checked = !data.recycleItems[e].checked;
        }
        function handleRecycle(i, citem) {
            data.recycleItems.splice(i, 1);
            window.mitt.emit('addRecycle', citem);
        }
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
