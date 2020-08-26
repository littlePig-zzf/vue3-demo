<template>
    <navHeader @change="pageChange"
               :page="page"></navHeader>
    <todo v-show="page === 'todo'"></todo>
    <recycle v-show="page === 'recycle'"></recycle>
</template>

<script>
import navHeader from '@/components/navHeader'
import recycle from '@/view/recycle'
import todo from '@/view/todo'
import { ref } from 'vue'
export default {
    components: {
        recycle,
        todo,
        navHeader
    },
    setup() {
        const page = ref('todo')
        function pageChange(val) {
            page.value = val
        }
        return {
            page,
            pageChange
        }
    },
}
</script>
<style lang="less">
.todo-list {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    background-color: #f8f8f8;
    &-item {
        position: relative;
        margin: 2px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ffe0fd;
        background-color: #fff;
        &:hover {
            background-color: #ffe0fd;
        }
        .checkbox {
            margin: 0 5px;
            vertical-align: middle;
        }
        .delete-label {
            text-decoration: line-through;
            color: #999;
        }
        .delete {
            position: absolute;
            right: 10px;
            font-size: 12px;
            color: #999;
            text-decoration: underline;
            cursor: pointer;
        }
        label {
            cursor: pointer;
        }
    }
}
</style>