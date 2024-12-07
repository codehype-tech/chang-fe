<template>
  <div class="filter-container">
    <v-select
      class="w-100"
      placeholder="Select filter"
      :items="props.options"
      variant="solo-filled"
      hide-details
      style="flex: 3"
    ></v-select>

    <div class="filter-actions-container">
      <v-text-field
        variant="outlined"
        hide-details
        placeholder="Search..."
        class="search-txf"
        color="border-secondary"
      ></v-text-field>

      <v-btn
        :text="mdAndUp ? 'Search' : undefined"
        color="primary"
        class="sarch-action-btn text-none"
        :prepend-icon="mdAndUp ? 'mdi-magnify' : undefined"
      >
        <v-icon v-if="!mdAndUp">mdi-magnify</v-icon>
        <label v-else> Search </label>
      </v-btn>
      <v-btn
        :text="mdAndUp ? '' : undefined"
        variant="outlined"
        class="sarch-action-btn text-none"
        :prepend-icon="mdAndUp ? 'mdi-cached' : undefined"
      >
        <v-icon v-if="!mdAndUp">mdi-cached</v-icon>
        <label v-else> Clear Filter </label>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface OptionItem {
  title: string;
  value: string;
}
const { mdAndUp } = useDisplay();

const emits = defineEmits<{
  (event: "onSearch", value: string): void;
  (event: "onClear"): void;
}>();

const props = defineProps<{
  options: Array<OptionItem>;
}>();
</script>

<style lang="scss" scoped>
.search-txf {
  width: 100% !important;
  height: 100% !important;
  border-color: $admin-border-secondary;
}

.sarch-action-btn {
  font-weight: 500;
  height: 55px !important;

  @include respond-to(tablet) {
    height: 48px;
  }
  @include respond-to(mobile) {
    height: 48px;
  }
}

.filter-container {
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  width: 100%;

  @include respond-to(tablet) {
    flex-direction: column;
  }
  @include respond-to(mobile) {
    flex-direction: column;
  }
}

.filter-actions-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;
  flex: 8;
  align-items: stretch;
}
</style>
