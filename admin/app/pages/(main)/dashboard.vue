<template>
  <NuxtLayout name="main-page">
    <template #title.label> Booking Management </template>

    <template #search-actions>
      <v-select
        label="Date"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="solo-filled"
        hide-details
      ></v-select>
    </template>

    <template #default>
      <div class="content-container">
        <div class="content-header-container">
          <ContainerRoundedSecondary
            >Pending 999 Items</ContainerRoundedSecondary
          >

          <div class="content-header-action-container">
            <v-btn
              color="primary"
              style="color: white"
              base-color="primary"
              class="text-none"
              prepend-icon="mdi-upgrade"
              text="Export Files"
            >
            </v-btn>
            <v-btn
              color="primary"
              style="color: white"
              base-color="primary"
              class="text-none"
              prepend-icon="mdi-share"
              text="Share Lead"
            >
            </v-btn>
          </div>
        </div>
        <div class="content-body-container">
          
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({ title: "Dashboard" });
</script>

<style lang="scss" scoped>
.content-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.content-header-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
.content-header-action-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.content-body-container {
  flex-grow: 4;
}
</style>
