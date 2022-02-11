<template>
    <li>
      <label :class="{completed:isCompleted}">
        <input type="checkbox" v-model="isCompleted" name="" id="" @click="updateState(index,isCompleted)">
        {{todo.title}}
      </label>
      <a @click="deleteTodo(index)">删除</a>
    </li>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import {Todo} from '@/type/Todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo:{
      type:Object as () => Todo,
      required:true
    },
    index:{
      type:Number,
      required:true
    }
  },
  setup(props,context){
    const a = '2'
    const deleteTodo = inject('deleteTodo')
	  const updateState = inject('updateState')
    console.log(updateState)
    const isCompleted = ref(props.todo.isCompleted)
    // const isCompleted = computed({
    //   get(){
    //     return props.todo.isCompleted
    //   },
    //   set(val){
    //     console.log(context.attrs.updateState)
    //   }
    // })
   
    return {
      isCompleted,
      deleteTodo,
      updateState
    }
  }
});
</script>

<style lang='scss' scoped>
    li{
      width: 100%;
      padding: 0 10px;
      display: flex;
      height: 50px;
      align-items: center;
      background: #fdf8f8;
      border-bottom:1px solid #e8e8e8 ;
      font-size: 14px;
      button{
        margin-left: auto;
      }
      label{
        height: 50px;
        line-height: 50px;
        width: 90%;
        text-align: left;
      }
      a{
        margin-left: auto;
        color: #39f;
        cursor: pointer;
      }
      .completed{
        text-decoration: line-through;
      }
    }
</style>