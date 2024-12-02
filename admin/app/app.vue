<template>
  <NuxtLayout>
    <ClientOnly>
      <v-app>
        <NuxtPage />
      </v-app>
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup lang="ts">
const apiClient = useApiClient();
console.log("[admin] config : ", apiClient.baseURL);
</script>
