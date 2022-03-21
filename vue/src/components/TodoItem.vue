<template>
  <li v-bind:class="{completed: todo.completed}">
    <input type="checkbox" v-model="todo.completed"/>
    {{todo.id}} - {{todo.title}} <input type='button' value='x' v-on:click="$emit('remove-item', todo.id)"/>
  </li>
</template>

<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
})
export default class TodoItem extends Vue {}
</script>

<style lang="less" scoped>
 li {
   display: flex;
   justify-content: space-between;
   padding: 10px;
   margin: 5px;
   border: 1px solid #111;

  &.completed {
    text-decoration: line-through;
    color: #f11;
  }
 }
</style>
