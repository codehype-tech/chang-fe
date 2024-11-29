<template>
  <NuxtLayout>
    <v-app>
      <div class="text-center">
        <VBtn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle">
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>

          Welcome to CODEHYPE CHANG TEAM : {{ $t("lang") }}, {{ appName }}
          {{ apiBaseUrl }}
          , {{ secretApiKey }}

          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </VBtn>

        {{ baseStore.count }}

        <VBtn
          append-icon="mdi-account-circle"
          prepend-icon="mdi-check-circle"
          @click="baseStore.increment"
        >
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>

          INCREASE

          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </VBtn>
        <VBtn
          append-icon="mdi-account-circle"
          prepend-icon="mdi-check-circle"
          @click="baseStore.decrement"
        >
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>

          DECREASE

          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </VBtn>
        <!-- <v-btn
          append-icon="mdi-account-circle"
          prepend-icon="mdi-check-circle"
          @click="increment"
        >
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>
          INCREASE
          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        <v-btn
          append-icon="mdi-account-circle"
          prepend-icon="mdi-check-circle"
          @click="decrease"
        >
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>
          DECREASE
          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </v-btn>

        {{baseStore.count}} -->
      </div>
      <!-- <NuxtPage /> -->
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const appName = config.public.appName;
const apiBaseUrl = config.public.apiBaseUrl;
const secretApiKey = useSecretKey();
const baseStore = useBaseStore();

const apiClient = useApiClient();
console.log("[admin] config : ", apiClient.baseURL);
</script>
