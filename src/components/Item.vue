<template>
    <li>{{todo.title}}  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Todo} from '@/type/Todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo:{
      type:Object as () => Todo
    }
  },
  setup(){
   
  }
});
</script>

<style lang='sass' scoped>
    
</style>