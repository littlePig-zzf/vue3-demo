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
               @click="handleDelete(index, item)">删除</a>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array,
            default: ()=> {return []}
        }
    },
    setup(props, context) {
        function handleCheck(index) {
            context.emit('handle-check', index)
        }
        function handleDelete(index, item) {
            context.emit('handle-delete', index, item)
        }
        
        return {
            handleCheck,
            handleDelete
        }
    }
}
</script>

<style>
</style>