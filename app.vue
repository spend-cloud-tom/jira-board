<script setup>
const links = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
]
</script>

<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" flat density="compact">
      Super Jira Board
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>
