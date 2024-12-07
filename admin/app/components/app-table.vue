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

    <template #item.no="{ item, index }">
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
  </v-data-table-server>
</template>

<script lang="ts" setup>
const props = defineProps<{
  height: number;
}>();

const developments = [
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

async function fetch(options: {
  page: any;
  itemsPerPage: any;
  sortBy: any;
}): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (options.page - 1) * options.itemsPerPage;
      const end = start + options.itemsPerPage;
      const items = developments.slice();

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

const headers: readonly {
  title: string;
  align: "start" | "end";
  sortable: boolean;
  key: string;
}[] = [
  {
    title: "No",
    align: "start",
    sortable: true,
    key: "no",
  },
  { title: "Name", key: "name", align: "start", sortable: true },
  { title: "Projects", key: "projects", align: "start", sortable: true },
  { title: "Action", key: "actions", align: "start", sortable: false },
];

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
