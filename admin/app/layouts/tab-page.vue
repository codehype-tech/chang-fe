<template>
  <div class="d-flex flex-row">
    <v-tabs
      v-model="data.tab"
      direction="vertical"
      :mobile="true"
      :items="data.tabItems"
      align-tabs="center"
      color="white"
      slider-color="#f78166"
    >
      <template #tab="{ item }">
        <div
          :class="[
            data.tab === item.value ? 'tab-active' : 'tab-inactive',
            'pointer',
          ]"
          @click="data.tab = item.value"
        >
          <label for="" class="pointer">{{ item.text }}</label>
        </div>
      </template>

      <template #item="{ item }">
        <v-tabs-window-item :value="item.value" class="pa-4 w-100">
          <slot :name="`tab-content-${item.value}`"></slot>
        </v-tabs-window-item>
      </template>
    </v-tabs>
  </div>
</template>
<script setup lang="ts">
const data = reactive({
  tab: "profile",
  tabItems: [
    {
      text: "Profile",
      value: "profile",
    },
    {
      text: "Project",
      value: "project",
    },
  ] as Array<{ text: string; value: string }>,
});
</script>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.tab-active {
  background-color: #eceeff;
  width: 250px;
  color: $admin-secondary;
  padding-left: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 4px;
  padding-right: 16px;
  font-weight: bold;
}

.tab-inactive {
  background-color: white;
  color: black;
  width: 250px;
  padding-left: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 16px;
}

.v-window {
  width: 100%;
}
</style>
