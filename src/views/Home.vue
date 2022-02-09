<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header :addTodo="addTodo"/>
    <List :todos = "todos"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import List from '@/components/List.vue'; // @ is an alias to /src
import {Todo} from '@/type/Todo'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    List
  },  
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        {id:1,title:'买买买',isCompleted:true},
        {id:2,title:'逛逛逛',isCompleted:false},
        {id:3,title:'吃吃吃',isCompleted:true}
      ]
    })
    //添加待办
    const addTodo = (todo:any) => {
      state.todos.unshift(todo)
    }
    return {
      ...toRefs(state),
      addTodo
    }
  }
});
</script>
