<template>
  <v-layout full-height>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      :permanent="mdAndUp === true"
      app
    >
      <template #prepend>
        <div class="drawer-header">
          <div class="div-engineer">
            <Icon
              name="material-symbols:engineering"
              class="ic-engineer"
              size="25"
            />

            <!-- <v-icon color="black">mdi-home-account</v-icon> -->
          </div>
          <img src="@/assets/images/logo.svg" :height="21" />
        </div>
        <v-divider></v-divider
      ></template>

      <v-list
        v-for="(group, groupKey) in navItems"
        :key="groupKey"
        density="compact"
        nav
        class="div-nav-group"
      >
        <label class="l-nav-group-title">{{ group.title }}</label>
        <div v-for="(item, key) in group.children" :key="key">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <div
                v-bind="props"
                class="div-nav-item"
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 16 : 2"
                :style="{
                  backgroundColor: isHovering ? 'white' : undefined,
                }"
                @click="onDrawerItemClick(item.value)"
              >
                <v-icon :icon="item.icon"> </v-icon>
                <label
                  class="l-nav-item-title ignore"
                  :style="{ color: isHovering ? 'black' : undefined }"
                  >{{ item.title }}</label
                >
              </div>
            </template>
          </v-hover>
        </div>
      </v-list>

      <template #append>
        <v-divider></v-divider>
        <div class="div-profile">
          <div class="div-rounded">
            <v-img></v-img>
          </div>
          <div class="div-profile-info">
            <label class="l-profile-name l-truncate">Boonchove Porameth</label>
            <label class="l-profile-role l-truncate">Admin</label>
          </div>
          <v-btn
            icon="mdi-logout"
            variant="plain"
            style="flex: 1"
            @click="doSignout"
          ></v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <nuxt-layout v-if="mdAndUp" name="desktop-page">
        <template v-if="$slots['title.label']" #title.label
          ><slot name="title.label"></slot
        ></template>
        <template v-if="$slots['title.sub-title']" #title.sub-title
          ><slot name="title.sub-title"></slot
        ></template>
        <template v-if="$slots['title.action']" #title.action
          ><slot name="title.action"></slot
        ></template>
        <template #default> <slot></slot></template>
        <template v-if="$slots['search-actions']" #search-actions
          ><slot name="search-actions"></slot
        ></template>
      </nuxt-layout>

      <div
        v-else
        class="d-flex justify-center align-center h-100 w-100"
        style="flex-direction: column"
      >
        <v-app-bar>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <label class="l-page-title">
            <slot name="title.label"></slot>
          </label>
        </v-app-bar>
      </div>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
const drawer = ref(true);
const token = useCookie("token");
const { mdAndUp } = useDisplay();

export interface MainPageLayoutProps {
  isTitleDivider: boolean;
}
const props = defineProps<MainPageLayoutProps>();
watch(mdAndUp, (newVal) => {
  drawer.value = newVal;
});

const navItems = ref([
  {
    title: "",
    children: [
      {
        title: "Dashboard",
        value: "dashboard",
        icon: "mdi-home",
      },
      {
        title: "Developer",
        value: "developer",
        icon: " ",
      },
      {
        title: "Service",
        value: "service",
        icon: "mdi-chat-info",
      },
    ],
  },
  {
    title: "USER MANAGEMENT",
    children: [
      {
        title: "Customers",
        value: "customers",
        icon: "mdi-account-supervisor",
      },
      {
        title: "Service Officers",
        value: "service-officers",
        icon: " ",
      },
      {
        title: "Admins",
        value: "admins",
        icon: "mid-shield-account",
      },
    ],
  },
  {
    title: "ADMINISTRATOR",
    children: [
      {
        title: "Role & Permission",
        value: "role-permission",
        icon: " ",
      },
      {
        title: "Service Types",
        value: "service-types",
        icon: "mdi-inbox-full",
      },
      {
        title: "System",
        value: "system",
        icon: "mdi-cogs",
      },
      {
        title: "Activity Logs",
        value: "activity-logs",
        icon: " ",
      },
    ],
  },
]);

function onDrawerItemClick(value: string) {
  console.log("onDrawerItemClick", value);
  switch (value) {
    case "developer":
      navigateTo("/developer");
      break;
    case "dashboard":
      navigateTo("/dashboard");
      break;
    case "service":
      navigateTo("/service");
      break;
    case "customers":
      navigateTo("/customers");
      break;
    case "service-officers":
      navigateTo("/service-officers");
      break;
    case "admins":
      navigateTo("/admins");
      break;
    case "role-permission":
      navigateTo("/role-permission");
      break;
    case "service-types":
      navigateTo("/service-types");
      break;
    case "system":
      navigateTo("/system");
      break;
    case "activity-logs":
      navigateTo("/activity-logs");
      break;
    default:
      navigateTo("/");
      break;
  }
}

function doSignout() {
  token.value = undefined;
  navigateTo("/signin", { replace: true });
}
</script>

<style lang="scss" scoped>
.drawer-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  gap: 12px;
}
.div-engineer {
  display: flex;
  background-color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

.div-nav-item {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-inline: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.div-nav-group {
  display: flex;
  flex-direction: column;
}

.l-nav-group-title {
  @include apply-font-styles(rgba(255, 255, 255, 0.5));
}

.l-nav-item-title {
  @include apply-font-styles(white, 16px);
}

.l-profile-role {
  @include apply-font-styles(white, 16px);
  font-weight: 300;
}

.l-profile-name {
  @include apply-font-styles(white, 16px);
}

.div-rounded {
  min-width: 44px;
  min-height: 44px;
  background-color: white;
  border-radius: 12px;
  flex: 1;
}

.div-profile-info {
  display: flex;
  flex-direction: column;
  flex: 2;
  max-width: 120px;
}

.div-profile {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px;
  gap: 12px;
}

.on-hover {
  background-color: rgba(#fff, 0.8);

  color: #000;
}

.ic-engineer {
  color: $admin-secondary;
}

.desktop-title {
  width: 100%;
}
</style>
