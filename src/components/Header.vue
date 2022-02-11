<template>
    <div class="header">
        <input type="text" v-model="title" placeholder="输入待办事宜" @keyup.enter="add"><button @click="add">新增</button>
    </div>
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

<style lang='scss' scoped>
    .header{
        display: flex;
        justify-content: space-between;
        margin-bottom:20px;
        input{
            width: 80%;
            height: 40px;
            padding :0 10px;
            border: 1px solid #d1d1d1;
            border-radius: 4px;
        }
        button{
            width: 18%;
            height: 40px;
            text-align: center;
        }
    }
</style>