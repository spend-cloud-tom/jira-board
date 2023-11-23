<script setup lang="ts">
const { items, fetchNextPage } = useBoardsQuery()
</script>

<template>
  <section>
    <header>
      <h2>Boards</h2>
    </header>
    <nuxt-page>
      <main>
        <board-overview-item v-for="(item, index) in items" :key="`item-${index}`" :item="item" :width="200" />
      </main>
    </nuxt-page>
  </section>
</template>

<style scoped>
.item {
  width: 500px;
}

main {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
