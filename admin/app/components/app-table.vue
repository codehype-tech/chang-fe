<template>
  <v-data-table-server
    fixed-header
    v-model:items-per-page="data.itemsPerPage"
    :headers="headers"
    :items="data.serverItems"
    :items-length="data.totalItems"
    :loading="data.loading"
    :search="data.search"
    :items-per-page-text="'Items per page:'"
    item-value="name"
    :page-text="`page ${data.page + 1}`"
    @update:options="loadItems"
    @update:page="onUpdatePage"
    loading-text="Loading..."
    @update:items-per-page="onUpdateItemPerPage"
    :height="props.height"
  >
    <template
      v-for="(slotFn, slotName) in $slots"
      #[slotName]="{ columns, item, index }"
    >
      <slot
        :name="slotName"
        :item="item"
        :index="index"
        :columns="columns"
      ></slot>
    </template>
  </v-data-table-server>
</template>

<script lang="ts" setup>
const props = defineProps<{
  height: number;
  headers: readonly {
    readonly key?:
      | (
          | "data-table-group"
          | "data-table-select"
          | "data-table-expand"
          | (string & {})
        )
      | undefined;
    readonly title?: string | undefined;
    readonly align?: ("start" | "end" | "center") | undefined;
    readonly sortable?: boolean | undefined;
  }[];
  items: Array<any>;
}>();

async function fetch(options: {
  page: any;
  itemsPerPage: any;
  sortBy: any;
}): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (options.page - 1) * options.itemsPerPage;
      const end = start + options.itemsPerPage;
      const items = props.items.slice();

      if (options.sortBy.length) {
        const sortKey = options.sortBy[0].key;
        const sortOrder = options.sortBy[0].order;
        items.sort((a: any, b: any) => {
          const aValue = a[sortKey];
          const bValue = b[sortKey];
          return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
        });
      }

      const paginated = items.slice(start, end);

      resolve({ items: paginated, total: items.length });
    }, 500);
  });
}

const data = reactive({
  itemsPerPage: 10,
  search: "",
  serverItems: [] as Array<{
    name: string;
    projects: number;
    actions: Array<string>;
  }>,
  loading: true,
  totalItems: 0,
  page: 0,
});

function loadItems(options: { page: any; itemsPerPage: any; sortBy: any }) {
  data.loading = true;

  fetch({
    page: options.page,
    itemsPerPage: options.itemsPerPage,
    sortBy: options.sortBy,
  }).then(({ items, total }) => {
    data.serverItems = items;
    data.totalItems = total;
    data.loading = false;
  });
}

function onUpdatePage(value: any) {
  console.log("onUpdatePage : value");
  data.page = value;
}
function onUpdateItemPerPage(value: any) {
  console.log("onUpdateItemPerPage : value");
  data.itemsPerPage = value;
}
</script>
