<script setup lang="ts">
const { data } = await useJiraData('agile/1.0/board')
</script>

<template>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>
