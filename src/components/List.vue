<template>
    <ul>
      <Item v-for="(todo,index) in todos" :key="todo.id" :todo= "todo" :index="index"/>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Item from '@/components/Item.vue'

export default defineComponent({
  name: 'Header',
  components:{Item},
  props: ['todos'],
  setup(props){
      
      return {
         
      }
  }
});
</script>

<style lang='sass' scoped>
    
</style>