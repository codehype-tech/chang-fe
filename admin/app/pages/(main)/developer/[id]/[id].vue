<template>
  <NuxtLayout name="main-page">
    <template #title.label>
      <v-breadcrumbs
        :items="items"
        divider=">"
        style="font-size: 16px; padding: 0px"
      >
        <template v-slot:title="{ item, index }">
          <label
            :style="{
              fontWeight: index == items.length - 1 ? 'bold' : 400,
              color:
                index == items.length - 1
                  ? '#404DFF'
                  : mdAndUp
                  ? 'black'
                  : 'white',
            }"
            @click="navigateTo(item.to)"
          >
            {{ item.title }}</label
          >
        </template>
      </v-breadcrumbs>
    </template>

    <template #default>
      <nuxt-layout name="tab-page" :items="projectTabItems">
        <template #tab-content-profile>
          <nuxt-layout name="tab-page-item">
            <template #title>{{ $t("pages.developer.profile") }}</template>
            <template #actions>
              <v-btn
                prepend-icon="mdi-content-save"
                color="primary"
                text="Save"
              ></v-btn>
            </template>
            <template #default>
              <div class="tab-content-project-container mt-11">
                <AppTextField
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.name')"
                  :label="$t('pages.developer.name')"
                  is-required
                />
                <AppSelect
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.type')"
                  :label="$t('pages.developer.type')"
                  :items="typeItems"
                  is-required
                />
                <AppTextField
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.zipCode')"
                  :label="$t('pages.developer.zipCode')"
                  is-required
                />
                <AppSelect
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.province')"
                  :label="$t('pages.developer.province')"
                  :items="typeItems"
                  is-required
                />

                <AppSelect
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.district')"
                  :label="$t('pages.developer.district')"
                  :items="typeItems"
                  is-required
                />
                <AppSelect
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.subDistrict')"
                  :label="$t('pages.developer.subDistrict')"
                  :items="typeItems"
                  is-required
                />

                <AppTextArea
                  class="w-100 txf"
                  :placeholder="$t('pages.developer.address')"
                  :label="$t('pages.developer.address')"
                />
              </div>
            </template>
          </nuxt-layout>
        </template>
        <template #tab-content-units>
          <nuxt-layout name="tab-page-item">
            <template #title>{{ $t("pages.developer.project") }} </template>
            <template #sub-title>
              <ContainerRoundedSecondary> 2 Units </ContainerRoundedSecondary>
            </template>
            <template #actions>
              <v-btn prepend-icon="mdi-plus" color="primary" text="Add"></v-btn>
            </template>
            <template #default>
              <div class="tab-content-project-container mt-11">
                <Filter
                  :options="[
                    { title: 'A', value: '0' },
                    { title: 'B', value: '1' },
                    { title: 'C', value: '2' },
                  ]"
                />
                <div ref="resizableDiv" v-resize="onResize">
                  <AppTable
                    :items="projectItems"
                    :headers="headers"
                    :height="tableData.tableHeight"
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
                        icon="mdi-pencil"
                        @click="onEditUtit()"
                      ></v-btn>
                      <v-btn
                        density="comfortable"
                        variant="plain"
                        icon="mdi-account-multiple"
                        @click="onEditMember()"
                      ></v-btn>
                    </template>
                  </AppTable>
                </div>
              </div>
            </template>
          </nuxt-layout>
        </template>
      </nuxt-layout>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import AppSelect from "@jaizen/base/app/components/AppSelect.vue";
import AppTextArea from "@jaizen/base/app/components/AppTextArea.vue";

useHead({ title: "Developer" });

const typeItems = [
  { title: "A", value: 1 },
  { title: "B", value: 2 },
  { title: "C", value: 3 },
  { title: "D", value: 4 },
];

function onEditUtit() {
  console.log("onEditUtit");
}

function onEditMember() {
  console.log("onEditMember");
}

const headers = [
  {
    title: "No",
    align: "start",
    sortable: true,
    key: "no",
  },
  { title: "House No.", key: "houseNo", align: "start", sortable: true },
  { title: "Room No.", key: "roomNo", align: "start", sortable: true },
  { title: "Floor", key: "floor", align: "start", sortable: true },
  {
    title: "Building Name",
    key: "buildingName",
    align: "start",
    sortable: true,
  },
  { title: "Member", key: "member", align: "start", sortable: true },
  { title: "Action", key: "actions", align: "center", sortable: false },
] as const;

const projectTabItems = [
  {
    text: "Profile",
    value: "profile",
  },
  {
    text: "Units",
    value: "units",
  },
];

const projectItems = [
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
  {
    houseNo: 123,
    roomNo: "A01",
    floor: 1,
    buildingName: "Central Residence",
    member: 2,
  },
  {
    houseNo: 456,
    roomNo: "B12",
    floor: 2,
    buildingName: "Green Valley Condo",
    member: 3,
  },
];

const route = useRoute();
const pageName = computed(() => route.params.id?.toString() ?? "");

const tableData = reactive({
  tableHeight: 0,
});
const resizableDiv = ref();
const { mdAndUp } = useDisplay();

function onResize() {
  tableData.tableHeight =
    window.innerHeight -
    resizableDiv.value.getBoundingClientRect().y -
    (mdAndUp.value ? 110 : 160);
}

const items = ref([
  {
    title: "Developer",
    disabled: false,
    to: "/developer",
  },
  {
    title: pageName.value,
    disabled: false,
    to: `/developer/${route.params.id}`,
  },
]);
</script>

<style lang="scss" scoped>
.l-title-item {
  font-size: 16px;
}

.tab-content-project-container {
  @include apply-col-gap();
  height: 100%;
}

.txf {
  color: black !important;
}
</style>
