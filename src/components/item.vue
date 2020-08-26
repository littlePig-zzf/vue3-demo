<template>
    <div class="todo-list"
         v-if="todoList.length">
        <p class="todo-list-item"
           v-for="(item, index) in todoList"
           :key="index">
            <input type="checkbox"
                   class="checkbox"
                   :id="index"
                   :checked="item.checked"
                   @change="handleCheck(index)">
            <label :for="index"
                   :class="{'delete-label': item.checked}">{{item.value}}</label>
            <a class="delete"
               @click="handleRecycle(index,item)">恢复</a>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array
        }
    },
    setup(props, context) {
        function handleCheck(index) {
            context.emit('handle-check', index)
        }
        function handleRecycle(i, item) {
            context.emit('handle-recycle', item)
        }
        return {
            handleCheck,
            handleRecycle
        }
    }
}
</script>

<style>
</style>