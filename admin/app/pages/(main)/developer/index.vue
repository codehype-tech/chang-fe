<template>
  <NuxtLayout name="main-page">
    <template #title.label> Developer Management </template>
    <template #title.sub-title>
      <ContainerRoundedSecondary>1213 Developers</ContainerRoundedSecondary>
    </template>

    <template #title.action>
      <v-btn
        color="primary"
        style="color: white"
        base-color="primary"
        class="text-none"
        prepend-icon="mdi-plus"
        text="Add"
      >
      </v-btn>
    </template>

    <template #header-actions>
      <Filter
        :options="[
          { title: 'A', value: '0' },
          { title: 'B', value: '1' },
          { title: 'C', value: '2' },
        ]"
      ></Filter>
    </template>

    <template #default>
      <div ref="resizableDiv" v-resize="onResize">
        <AppTable :height="tableData.tableHeight"></AppTable>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({ title: "Developer" });

const tableData = reactive({
  tableHeight: 0,
});
const resizableDiv = ref();
const { mdAndUp } = useDisplay();

function onResize() {
  tableData.tableHeight =
    window.innerHeight -
    resizableDiv.value.getBoundingClientRect().y -
    (mdAndUp.value ? 60 : 160);
}
</script>

<style lang="scss" scoped></style>
