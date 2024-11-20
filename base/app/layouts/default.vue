<template>
  <div class="default-layout">
    <div style="flex: 1">
      <slot />
    </div>
    <v-divider></v-divider>
    <div style="display: flex; flex-direction: column; position: relative">
      <slot name="bottom" />
    </div>
  </div>
</template>
<script setup lang="ts">
// Optionally include any setup logic here
</script>
<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
  scrollbar-width: none;
}
</style>
