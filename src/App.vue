
<template>
  <header class="mt-4">
      <nav class="flex gap-x-12 justify-center text-green-400 font-semibold">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/counter">Count</RouterLink>
        <RouterLink to="/todolist">Todo List</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
