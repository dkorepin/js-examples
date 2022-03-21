<template>
    <ul>
        <TodoItem
          v-for="todo in todos"
          v-bind:key="todo.id"
          v-bind:todo="todo"
          v-on:remove-item="removeItem"
        />
    </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TodoItem from '@/components/TodoItem'

@Options({
  components: {
    TodoItem
  },
  props: ['todos'],
  methods: {
    removeItem (id: any) {
      this.$emit('remove-item', id)
    }
  }
})

export default class TodoList extends Vue {}
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
</style>
