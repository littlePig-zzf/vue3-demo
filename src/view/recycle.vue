<template>
    <div>
        <item :todoList="data.recycleItems" @handle-check="handleCheck" @handle-recycle="handleRecycle"></item>
    </div>
</template>

<script>
import { onMounted, reactive, watch } from 'vue'
import item from '@/components/item'
export default {
    components: {
        item
    },
    setup() {
        const data = reactive({
            recycleItems: []
        })
        function handleCheck(e) {
            data.todoList[e].checked = !data.todoList[e].checked
            console.log(data.todoList[e].checked);
        }
        function handleRecycle(i, item) {
            data.recycleItems.splice(i, 1)
            window.mitt.emit('addRecycle', item)
        }
        watch(
            () => data.recycleItems,
            (val) => {
                console.log(val, '-=-==-=');
            }
        )
        onMounted(() => {
            console.log(window.mitt, 'window.mitt');
            window.mitt.on('addDelete', (obj) => {
                console.log(obj, 'obj');
                let array = []
                data.recycleItems.forEach((item) => {
                    array.push(item)
                })
                array.push(obj)
                data.recycleItems = array
                console.log(data.recycleItems, '-=-=-===========================');
            })
        })
        return {
            data,
            handleCheck,
            handleRecycle
        }
    }
}
</script>

<style>
</style>