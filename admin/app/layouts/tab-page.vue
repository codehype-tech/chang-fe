<template>
  <div class="tab-page-layout-container">
    <v-tabs
      v-model="data.tab"
      :direction="mdAndUp ? 'vertical' : 'horizontal'"
      :mobile="true"
      :items="data.tabItems"
      align-tabs="center"
      color="white"
      slider-color="#f78166"
      class="v-tab-container"
    >
      <template #tab="{ item }">
        <div
          :class="[
            data.tab === item.value ? 'tab-active' : 'tab-inactive',
            'pointer',
            'w-100',
            'text-center',
          ]"
          @click="data.tab = item.value"
        >
          <label for="" class="pointer">{{ item.text }}</label>
        </div>
      </template>

      <template #item="{ item }">
        <v-tabs-window-item :value="item.value" class="window-item-container">
          <slot :name="`tab-content-${item.value}`"></slot>
        </v-tabs-window-item>
      </template>
    </v-tabs>
  </div>
</template>
<script setup lang="ts">
const { mdAndUp } = useDisplay();
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

<style lang="scss" scoped>
.v-tab-container {
  display: flex;
  height: 100px;

  flex-direction: row;

  @include respond-to(desktop) {
    height: min-content;
    max-width: 300px;
  }
}
.tab-page-layout-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @include respond-to(mobile) {
    flex-direction: row;
  }
  @include respond-to(tablet) {
    flex-direction: column;
  }
}
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
  font-size: 16px;
}

.tab-inactive {
  background-color: white;
  color: black;
  width: 250px;
  padding-left: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 16px;
  font-size: 16px;
}

.v-window {
  width: 100%;
  height: 100%;
  background-color: $admin-tab-body-bg;
}

.v-slide-group {
  width: 100%;
  border-right-color: rgba(0, 0, 0, 0.1);
  padding-right: 16px;
  border-right-style: solid;
  border-right-width: thin;
  padding-top: 20px;
  display: flex;
  flex-direction: row;

  @include respond-to(mobile) {
    padding: 16px;
  }
  @include respond-to(tablet) {
    padding: 16px;
  }
}

.window-item-container {
  padding: 44px;
  height: 100%;
}
</style>
