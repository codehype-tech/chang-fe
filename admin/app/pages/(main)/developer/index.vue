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
        <AppTable
          :headers="headers"
          :height="tableData.tableHeight"
          :items="items"
        >
          <template #headers="{ columns }">
            <tr>
              <th
                v-for="header in columns"
                :key="header.title"
                :style="{ fontWeight: 'bold' }"
              >
                {{ header.title }}
              </th>
            </tr>
          </template>

          <template #item.no="{ index }">
            {{ index + 1 }}
          </template>
          <template #item.actions="{ item }">
            <v-btn
              density="comfortable"
              variant="plain"
              icon="mdi-magnify"
              @click="navigateTo(`/developer/${item.name}`)"
            ></v-btn>
          </template>
        </AppTable>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({ title: "Developer" });

const headers = [
  {
    title: "No",
    align: "start",
    sortable: true,
    key: "no",
  },
  { title: "Name", key: "name", align: "start", sortable: true },
  { title: "Projects", key: "projects", align: "start", sortable: true },
  { title: "Action", key: "actions", align: "start", sortable: false },
] as const;

const items = [
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Prime Home Builders",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Elegant Habitat",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Grand Living Development",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
  },
  {
    name: "Greenfield Residences",
    projects: 2,
    actions: ["search"],
  },
];

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
