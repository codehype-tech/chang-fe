<template>
  <div class="page-layout-container">
    <div class="desktop-appbar">
      <div class="title-container">
        <label class="l-title">
          <slot name="title.label"></slot>
        </label>
        <slot name="title.sub-title"></slot>
      </div>

      <slot name="title.action"></slot>
    </div>

    <v-divider></v-divider>

    <div class="desktop-content">
      <div v-if="$slots['search-actions']" class="search-actions">
        <slot name="search-actions"></slot>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-layout-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.l-title {
  font-weight: bold;
  font-size: 32px;
  color: black;
}

.desktop-appbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.desktop-content {
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  gap: 16px;
  height: 100% !important;
}

.title-container {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
}

.search-actions {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  border-color: $admin-border;
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  gap: 16px;
}
</style>
