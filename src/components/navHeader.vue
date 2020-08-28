<template>
    <div class="nav-header">
        <a :class="{active: page === 'todo'}"
           @click="changePage('todo')">待办事项</a> |
        <a :class="{active: page === 'recycle'}"
           @click="changePage('recycle')">回收站</a>
        <span class="clear"
              @click="clear">清空</span>
    </div>
</template>

<script>
import utils from '../utils';

export default {
    name: 'NavHeader',
    props: {
        page: {
            type: String,
            default: 'todo',
        },
    },
    setup(props, context) {
        function changePage(val) {
            context.emit('change', val);
        }

        function clear() {
            utils.clearAllItems();
        }

        return {
            changePage,
            clear,
        };
    },
};
</script>

<style>
.nav-header {
    padding: 20px; /* 设置内边距 */
    text-align: center; /* 设置字体居中 */
}
.nav-header a {
    font-weight: 700; /* 设置字体加粗 */
    color: #2c3e50; /* 设置字体颜色 */
    cursor: pointer; /* 设置鼠标移入成小手状 */
}
.nav-header a.active {
    color: #42b983; /* 设置激活态的字体颜色 */
}
.nav-header .clear {
    position: absolute;
    right: 21px;
    top: 24px;
    font-size: 12px;
    cursor: pointer;
}
</style>
