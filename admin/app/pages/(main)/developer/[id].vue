<template>
  <NuxtLayout name="main-page">
    <template #title.label>
      <v-breadcrumbs
        :items="items"
        divider=">"
        style="font-size: 16px; padding: 0px"
      >
        <template v-slot:title="{ item, index }">
          <label
            :style="{
              fontWeight: index == items.length - 1 ? 'bold' : 400,
              color:
                index == items.length - 1
                  ? '#404DFF'
                  : mdAndUp
                  ? 'black'
                  : 'white',
            }"
            @click="navigateTo(item.to)"
          >
            {{ item.title }}</label
          >
        </template>
      </v-breadcrumbs>
    </template>

    <template #default>
      <nuxt-layout name="tab-page">
        <template #tab-content-profile>
          <nuxt-layout name="tab-page-item">
            <template #title>Profile</template>
            <template #actions>
              <v-btn
                prepend-icon="mdi-content-save"
                color="primary"
                text="Save"
              ></v-btn>
            </template>
          </nuxt-layout>
        </template>
        <template #tab-content-project> PROJECT CONTENT </template>
      </nuxt-layout>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({ title: "Developer" });

const route = useRoute();
const { mdAndUp } = useDisplay();
const pageName = computed(() => route.params.id?.toString() ?? "");

const items = ref([
  {
    title: "Developer",
    disabled: false,
    to: "/developer",
  },
  {
    title: pageName.value,
    disabled: false,
    to: `/developer/${route.params.id}`,
  },
]);
</script>

<style lang="scss" scoped>
.l-title-item {
  font-size: 16px;
}
</style>
