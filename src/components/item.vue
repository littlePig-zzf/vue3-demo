<template>
    <p class="todo-list-item">
        <input type="checkbox"
               class="checkbox"
               :id="item"
               :checked="item.checked"
               @change="handleCheck(index)">
        <label :for="item"
               :class="{'delete-label': item.checked}">{{item.value}}</label>
        <slot></slot>
    </p>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
        },
        index: {
            type: Number
        }
    },
    setup(props, context) {
        function handleCheck(index) {
            context.emit('handle-check', index)
        }
        return {
            handleCheck,
        }
    }
}
</script>

<style>
</style>