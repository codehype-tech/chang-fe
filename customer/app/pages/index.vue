<template>
  <NuxtLayout>
    <div class="container">
      <v-window
        v-model="pageVModel"
        :show-arrows="false"
        @update:model-value="onPageViewChange"
      >
        <v-window-item
          v-for="n in pageItems"
          :key="`card-${n}`"
          class="page-container"
        >
          <v-img
            :width="250"
            :height="248"
            cover
            src="@/assets/images/intro_1.svg"
          ></v-img>

          <label for="" class="desc-label text-center mt-7"
            >{{ $t("pages.intro.desc") }} {{ n }}
          </label>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between gap-8">
        <v-item-group
          @update:model-value="onStepperChange"
          v-model="onboarding"
          class="text-center d-flex"
          mandatory
          style="gap: 11px"
        >
          <v-item
            v-for="n in pageItems"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :color="isSelected ? 'primary' : '#D9D9D9'"
              icon="mdi-record"
              width="10"
              height="10"
              @click="toggle"
              style="font-size: 10px"
            />
          </v-item>
        </v-item-group>
      </v-card-actions>

      <label for="" class="fl mt-7">{{ $t("pages.intro.title") }} </label>
    </div>
    <template v-slot:bottom>
      <div class="ma-8">
        <v-btn block color="black" size="large">
          <label for=""> Let’s get started </label>
        </v-btn>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const onboarding = ref(1);
const pageItems = ref(4);
const pageVModel = ref(0);

function onPageViewChange(value: any) {
  onboarding.value = value + 1;
}

function onStepperChange(value: any) {
  pageVModel.value = value - 1;
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-inline: 48px;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.desc-label {
  @include apply-font-styles($black-50);
}
</style>
