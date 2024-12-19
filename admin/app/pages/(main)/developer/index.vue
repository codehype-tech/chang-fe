<template>
  <NuxtLayout name="main-page">
    <template #title.label> Developer Management </template>
    <template #title.sub-title>
      <ContainerRoundedSecondary>1213 Developers</ContainerRoundedSecondary>
    </template>

    <template #title.action>
      <v-btn
        v-if="mdAndUp"
        @click="isDialogVisible = true"
        color="primary"
        style="color: white"
        base-color="primary"
        class="text-none"
        prepend-icon="mdi-plus"
        text="Add"
      >
      </v-btn>
      <div v-else>
        <div style="background-color: white; border-radius: 4px" width="28px">
          <v-icon color="primary">mdi-plus</v-icon>
        </div>
      </div>
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
      <DialogCustom
        v-model="isDialogVisible"
        :title="'Add Developer'"
        @submit="handleDialogSubmit"
        :loading="isLoading"
        :onClose="handleDialogClose"
      >
        <template #body>
          <div>
            <label for="">Name <span class="text-red">*</span></label>
            <v-text-field
              v-model="dialogInputs.name.value"
              label="Name"
            ></v-text-field>
          </div>
        </template>
      </DialogCustom>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import DialogCustom from "~/utils/dialogCustom.vue";
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
const isDialogVisible = ref(false);
const isLoading = ref(false);
const dialogInputs = ref({
  name: {
    value: "",
    errMessage: "",
    isValid: true,
  },
});

const handleDialogClose = () => {
  console.log("Dialog closed");
  dialogInputs.value.name.value = "";
};
const handleDialogSubmit = () => {
  console.log("Submitted Data:", dialogInputs.value);
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    isDialogVisible.value = false;
    dialogInputs.value.name.value = "";
  }, 1000);
};
</script>

<style lang="scss" scoped></style>
