<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
const apiClient = useApiClient();
console.log("[customer] config : ", apiClient.baseURL);
</script>
