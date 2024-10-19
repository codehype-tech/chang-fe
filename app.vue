<template>
  <NuxtLayout>
    <v-app>
      <div class="text-center">
        <v-btn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle">
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>

          Welcome to CODEHYPE CHANG TEAM : {{ $t("lang") }}, {{ appName }}
          {{ apiBaseUrl }}
          , {{ secretApiKey }}

          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </v-btn>
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
</script>
