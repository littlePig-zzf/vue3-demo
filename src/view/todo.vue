<template>
    <div class="todo-wrap">
        <input type="text"
               class="input"
               :value="data.todoVal"
               @input="handleInput"
               @keyup.enter="handleEnter">
        <ritem :todoList="data.todoList" @handle-check="handleCheck" @handle-delete="handleDelete"></ritem>
    </div>
</template>

<script>
import ritem from '@/components/ritem'
import { reactive } from 'vue'
export default {
    components: {
        ritem
    },
    setup() {
        const data = reactive({
            todoVal: '',
            todoList: []
        })
        function handleInput(e) {
            data.todoVal = e.target.value
        }
        function handleEnter(e) {
            data.todoList.push({value: e.target.value, checked: false})
            data.todoVal = ''
        }
        function handleCheck(e) {
            data.todoList[e].checked = !data.todoList[e].checked
            console.log(data.todoList[e].checked);
        }
        function handleDelete(i, item) {
            data.todoList.splice(i, 1)
            window.mitt.emit('addDelete', item)
        }
        return {
            data,
            handleInput,
            handleEnter,
            handleDelete,
            handleCheck
        }
    }
}
</script>

<style lang="less">
.todo-wrap {
    width: 80%;
    margin: 0 auto;
    .input {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #ddd;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        outline: none;
    }
   
}
</style>