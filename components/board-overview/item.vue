<script setup lang="ts">
const props = defineProps<{
  item: JiraBoard
}>()
</script>

<template>
  <article class="item">
    <header>
      <h3>{{ props.item.name }}</h3>
      <div class="extras">
        <span class="chip"> {{ props.item.type }}</span>
      </div>
    </header>
    <footer>
      <v-btn :to="`/boards/${props.item.id}`">
        View
      </v-btn>
    </footer>
  </article>
</template>

<style scoped>
.item {
  background: white;
  border: 1px solid #e3e3e3;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

header {
  padding: .5rem;
  border-bottom: 1px solid #e3e3e3;
  display:flex;
}

h3 {
  font-size: 13px;
}

header .extras {
  margin-left: auto;
}

.chip {
  background: #e3e3e3;
  color: #333;
  border-radius:.25em;
  padding:.5em;
  font-size: 11px;
}

footer {
  padding: .5rem;
  display: flex;
  justify-content: flex-end;
}
</style>
