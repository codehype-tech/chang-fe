<template>
  <div
    class="d-flex justify-center align-center h-100 w-100"
    style="flex-direction: column"
  >
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="emits('drawerClick')"
      ></v-app-bar-nav-icon>
        
      <label class="l-page-title">
        <slot name="title.label"></slot>
      </label>
    </v-app-bar>

    <div class="mobile-content">
      <div v-if="$slots['header-actions']">
        <slot name="header-actions"></slot>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (event: "drawerClick"): void;
}>();
</script>

<style lang="scss" scoped>
.page-layout-container {
  height: 100%;
  width: 100%;
}

.mobile-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100% !important;
}
</style>
