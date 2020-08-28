<template>
    <p class="todo-list-item">
        <input :id="index"
               type="checkbox"
               class="checkbox"
               :checked="item.checked"
               @change="handleCheck(index)">
        <label :for="index"
               :class="{'delete-label': item.checked}">{{ item.value }}</label>
        <slot />
    </p>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: (() => { }),
        },
        index: {
            type: Number,
            default: 0,
        },
    },
    setup(props, context) {
        function handleCheck(index) {
            context.emit('handle-check', index);
        }
        return {
            handleCheck,
        };
    },
};
</script>

<style lang="less">
.todo-list {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f8f8f8;
    &-item {
        position: relative;
        margin: 2px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ffe0fd;
        background-color: #fff;
        text-align: left;
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
