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
