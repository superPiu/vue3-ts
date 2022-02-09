<template>
    <input type="text" v-model="title" placeholder="输入待办事宜" @keyup.enter="add">
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    addTodo: {
        type: Function,
        required: true
    },
  },
  setup(props){
      const title = ref('');
      const add = () => {
          const text = title.value
          props.addTodo({
              id:new Date(),
              title:text,
              isCompleted:false
          })
          title.value = ''
      }
      return {
          add,
          title
      }
  }
});
</script>

<style lang='sass' scoped>

</style>