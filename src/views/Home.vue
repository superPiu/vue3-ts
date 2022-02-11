<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header :addTodo="addTodo"/>
    <List :todos = "todos"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs,provide,watch,onMounted } from 'vue';
import {saveTodos,readTodos} from '../store/localStorage'
import Header from '@/components/Header.vue'; // @ is an alias to /src
import List from '@/components/List.vue'; 
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
        // {id:1,title:'买买买',isCompleted:true},
        // {id:2,title:'逛逛逛',isCompleted:false},
        // {id:3,title:'吃吃吃',isCompleted:true}
      ]
    })
    onMounted(() => {
      state.todos = readTodos();
    })
    //监听数据变化存储到浏览器缓存中
    watch(() => state.todos, saveTodos, {deep:true})
    //添加待办
    const addTodo = (todo:Todo) => {
      state.todos.unshift(todo)
    }
    //删除待办
    const deleteTodo = (index:number) => {
      state.todos.splice(index,1)
    }
    //更新选中状态
    const updateState = (index:number,status:boolean) => {
      state.todos[index].isCompleted = !status
    }
    provide('deleteTodo', deleteTodo)
	  provide('updateState', updateState)
    return {
      ...toRefs(state),
      addTodo
    }
  }
});
</script>
<style lang="scss" scoped>
@import "../assets/css/base.css";
  .home{
    width: 800px;
    margin: 0 auto;
  }
</style>
