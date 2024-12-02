<template>
  <NuxtLayout>
    <div class="container">
      <div>
        <v-img :width="250" :height="248" cover src="@/assets/images/rafiki.svg"></v-img>
      </div>
      <div class="pt-4 information">
        <h2 class="t-title text-center">{{ $t("pages.verify-otp.title") }}</h2>
        <div class="t-label pt-4">
          <label for=""> {{ $t("pages.verify-otp.desc") }}</label>
        </div>
        <div class="text-primary text-center">{{ phoneNumber }}</div>
      </div>
      <div class="t-otp mt-10">
        <v-otp-input color="blue-grey-lighten-5" variant="plain"></v-otp-input>
      </div>
      <div class="ref-code">
      <p class="text-center">REF:{{ refCode }}</p>
    </div>
    </div>
    

    <template v-slot:bottom>
      <div class="ma-8">
        <VBtn block color="black">
          <label for="" class="text-none">{{ $t("btn.btn-submit") }}</label>
        </VBtn>
        <VBtn class="mt-4 " block color="white">
          <label for="" class="text-none"> {{ $t("btn.btn-resend-code") }} </label>
        </VBtn>
      </div>
    </template>

  </NuxtLayout>
</template>
<script lang="ts" setup>

import { usePhoneStore } from '@/stores/phone.store';

function formatPhoneNumber(phone: string) {
  return phone.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1 xxx xxxx");
}
const phoneStore = usePhoneStore();
const phoneNumber = formatPhoneNumber(phoneStore.phoneNumber);
const refCode= "8323424"
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  // justify-content: center;
  // padding-top: 100px;
  padding: 30px !important;
  padding-inline: 48px;
  height: 100%;

  .information {
    .t-label {
      padding: 10px;
      width: 100%;
      display: flex;
      justify-content: center;

      label {
        max-width: 100%;
        text-align: center
      }
    }
  }
  .ref-code{
    margin-bottom: -40px !important;
  }




}
</style>
