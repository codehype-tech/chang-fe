<template>
  <NuxtLayout name="main-page">
    <template #title.label>
      <v-breadcrumbs :items="items" divider=">" style="font-size: 16px; padding: 0px">
        <template v-slot:title="{ item, index }">
          <label :style="{
            fontWeight: index == items.length - 1 ? 'bold' : 400,
            color:
              index == items.length - 1
                ? '#404DFF'
                : mdAndUp
                  ? 'black'
                  : 'white',
          }" @click="navigateTo(item.to)">
            {{ item.title }}</label>
        </template>
      </v-breadcrumbs>
    </template>

    <template #default>
      <nuxt-layout name="tab-page" :items="projectTabItems">
        <template #tab-content-profile>
          <v-form
            class="signin-form-container"
            v-model="profileData.formValid"
            @submit.prevent="doSaveProfile"
          >
            <nuxt-layout name="tab-page-item">
              <template #title>{{ $t("pages.developer.profile") }}</template>
              <template #actions>
                <v-btn
                  prepend-icon="mdi-content-save"
                  color="primary"
                  text="Save"
                  type="submit"
                  :loading="profileData.isLoading"
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
                </div>
              </template>
            </nuxt-layout>
          </v-form>
          <nuxt-layout name="tab-page-item">
            <template #title>{{ $t("pages.developer.profile") }}</template>
            <template #actions>
              <v-btn prepend-icon="mdi-content-save" color="primary" text="Save"></v-btn>
            </template>
            <template #default>
              <div class="tab-content-project-container mt-11">
                <AppTextField class="w-100 txf" :placeholder="$t('pages.developer.name')"
                  :label="$t('pages.developer.name')" is-required />
              </div>
            </template>
          </nuxt-layout>
        </template>
        <template #tab-content-project>
          <nuxt-layout name="tab-page-item">
            <template #title>{{ $t("pages.developer.project") }} </template>
            <template #sub-title>
              <ContainerRoundedSecondary>
                1213 Projects
              </ContainerRoundedSecondary>
            </template>
            <template #actions>
              <v-btn prepend-icon="mdi-plus" color="primary" text="Add" @click="isDialogVisible = true"></v-btn>
              <DialogCustom v-model="isDialogVisible" :title="'Add Developer'" @submit="handleDialogSubmit"
                :loading="isLoading" :onClose="handleDialogClose">
                <template #body>
                  <v-form ref="form" v-model="valid">
                    <label for="">Name Project<span class="text-red">*</span></label>
                    <v-text-field :rules="[rules.required]" v-model="formData.nameProject"
                      label="Name"></v-text-field>

                    <label for="">Type<span class="text-red">*</span></label>
                    <v-select label="Type" v-model="formData.type"></v-select>

                    <label for="">Zip Code <span class="text-red">*</span></label>
                    <v-text-field :rules="[rules.required, rules.zipCode]"  label="Zip Code" v-model="formData.zipCode"></v-text-field>

                    <label for="">Province <span class="text-red">*</span></label>
                    <v-select label="Province" v-model="formData.province"></v-select>

                    <label for="">District <span class="text-red">*</span></label>
                    <v-select label="District" v-model="formData.district"></v-select>

                    <label for="">Sub-District <span class="text-red">*</span></label>
                    <v-select label="Sub-District" v-model="formData.subDistrict"></v-select>

                    <label for="">Address <span class="text-red">*</span></label>
                    <v-textarea label="Address" v-model="formData.address"></v-textarea>
                  </v-form>

                </template>
              </DialogCustom>
            </template>
            <template #default>
              <div class="tab-content-project-container mt-11">
                <Filter :options="[
                  { title: 'A', value: '0' },
                  { title: 'B', value: '1' },
                  { title: 'C', value: '2' },
                ]" />
                <div ref="resizableDiv" v-resize="onResize">
                  <AppTable :items="projectItems" :headers="headers" :height="tableData.tableHeight">
                    <template #headers="{ columns }">
                      <tr>
                        <th v-for="header in columns" :key="header.title" :style="{ fontWeight: 'bold' }">
                          {{ header.title }}
                        </th>
                      </tr>
                    </template>

                    <template #item.no="{ index }">
                      {{ index + 1 }}
                    </template>
                    <template #item.actions="{ item }">
                      <v-btn density="comfortable" variant="plain" icon="mdi-magnify"
                        @click="navigateTo(`${route.path}/${item.name}`)"></v-btn>
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
import { useBaseStore } from "@jaizen/base/app/stores/base.store";

import DialogCustom from '~/utils/dialogCustom.vue';
useHead({ title: "Developer" });

const { doShowSnack, doHideSnack } = useBaseStore();
const projectTabItems = [
  {
    text: "Profile",
    value: "profile",
  },
  {
    text: "Project",
    value: "project",
  },
];
const headers = [
  {
    title: "No",
    align: "start",
    sortable: true,
    key: "no",
  },
  { title: "Name", key: "name", align: "start", sortable: true },
  { title: "Units", key: "units", align: "start", sortable: true },
  { title: "Type", key: "type", align: "start", sortable: true },
  { title: "Address", key: "address", align: "start", sortable: true },
  { title: "Action", key: "actions", align: "center", sortable: false },
] as const;

const projectItems = [
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
  {
    name: "Grand Living",
    projects: 2,
    actions: ["search"],
    units: 5,
    type: "Condo",
    address: "123 หมู่ 5 ซอยสุขุมวิท 3 บางจาก พระโขนง กรุงเทพมหานคร 10260",
  },
  {
    name: "Pinnacle Estate Group",
    projects: 2,
    actions: ["search"],
    units: 3,
    type: "Village",
    address: "45/6 ถนนลาดพร้าว ซอย 8 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
  },
  {
    name: "Sunshine Land Co., Ltd.",
    projects: 2,
    actions: ["search"],
    units: 5,
  },
];

const profileData = reactive({
  formValid: false,
  isLoading: false,
});
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

function doSaveProfile() {
  if (profileData.formValid) {
    profileData.isLoading = true;

    setTimeout(() => {
      profileData.isLoading = false;
      doShowSnack("Do save profile failure.", { type: "success" });
    }, 1500);
  }
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
const isDialogVisible = ref(false);
const isLoading = ref(false);
const valid = ref(false);
const formDefault = {
  nameProject: "",
  type: "",
  zipCode: "",
  province: "",
  district: "",
  subDistrict: "",
  address: "",
}
const formData = ref(JSON.parse(JSON.stringify(formDefault)));
const clearFormData = () => {
  formData.value = formDefault;
}
const rules = {
  required: (value: any) => !!value || "is required",
  zipCode: (value: any) =>
    /^\d+$/.test(value) || 'รหัสไปรษณีย์ต้องเป็นตัวเลขเท่านั้น',
}
const handleDialogClose = () => {
  console.log('Dialog closed');
  clearFormData();
};
const handleDialogSubmit = () => {
  console.log('Submitted Data:', formData.value)
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isDialogVisible.value = false
    clearFormData();
  }, 1000)
}
</script>

<style lang="scss" scoped>
.l-title-item {
  font-size: 16px;
}

.tab-content-project-container {
  @include apply-col-gap();
}

.txf {
  color: black !important;
}
</style>
