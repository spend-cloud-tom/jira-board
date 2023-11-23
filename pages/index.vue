<script setup lang="ts">
const { data } = await useJiraData('agile/1.0/board')
</script>

<template>
  <div>
    <header><h2>Welcome to the super jira board</h2></header>
    <main>
      Check out <NuxtLink to="/boards">
        the boards
      </NuxtLink>
    </main>
  </div>
</template>
