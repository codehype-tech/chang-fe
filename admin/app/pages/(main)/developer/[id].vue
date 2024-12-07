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
      <nuxt-layout name="tab-page">
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
                  <AppTable :height="tableData.tableHeight"></AppTable>
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
useHead({ title: "Developer" });

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
}

.txf {
  color: black !important;
}
</style>
