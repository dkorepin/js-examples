<template>
  <div class="home">
    <h1>Home page</h1>
    <TodoList
      v-if="todos.length"
      v-bind:todos="todos"
      v-on:remove-item="removeItem"
    />
    <div v-else>No todos</div>
    <Loader v-if="loading"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TodoList from '@/components/TodoList.vue' // @ is an alias to /src
import Loader from '@/components/Loader.vue'

@Options({
  components: {
    TodoList,
    Loader
  },
  data () {
    return {
      todos: [],
      loading: true
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(json => { setTimeout(() => { this.todos = json; this.loading = false }, 1000) })
  },
  methods: {
    removeItem (id: any) {
      this.todos = this.todos.filter((item: any) => item.id !== id)
    }
  }
})

export default class HomeView extends Vue {}
</script>
