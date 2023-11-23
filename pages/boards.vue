<script setup lang="ts">
const searchQuery = ref('')

const { items } = useBoardsQuery()

const itemsComputed = computed(() => {
  if (!searchQuery.value)
    return items.value
  return items.value.filter(item => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<template>
  <section>
    <header>
      <h2>Boards</h2>
    </header>
    <main>
      <v-toolbar>
        <v-text-field v-model="searchQuery" placeholder="Search" label="Search" />
      </v-toolbar>
      <board-overview-item v-for="(item, index) in itemsComputed" :key="`item-${index}`" :item="item" :width="200" />
    </main>
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
