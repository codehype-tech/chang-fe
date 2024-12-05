<template>
  <NuxtLayout>
    <div class="container">
      <div class="pt-5 img">
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
        <v-otp-input  :loading="isLoading" v-model="otp" color="blue-grey-lighten-5" variant="plain"></v-otp-input>
        <div v-if="isError" class="ps-2 t-validation text-red">{{ $t("pages.verify-otp.err") }}</div>
      </div>
      <div class="ref-code ">
        <p class="text-center text-medium-emphasis">REF:{{ refCode }}</p>
      </div>
    </div>

    <template v-slot:bottom>
      <div class="ma-8">
        <VBtn @click="onSubmit" block color="black" class="btn-submit" :disabled="!isValid">
          <label for="" class="text-none">{{ $t("btn.btn-submit") }}</label>
        </VBtn>
        <VBtn variant="outlined" class="mt-4 " block>
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
const phoneNumber = formatPhoneNumber(phoneStore.phoneNumber || "0000000000");
const otp = ref("");
const isValid = ref(false);
const isLoading = ref(false);
const isError = ref(false);
const refCode = "8323424"
watch(otp, () => {
  if(otp.value.length > 0){
    isError.value = false
  }
 
  if(otp.value.length === 6){
    isValid.value = otp.value.length === 6  ? true : false
  }else{
    isValid.value = false;
  }

})

async function onSubmit() {
  isLoading.value = true
  setTimeout(() => {
    otp.value = "";
    isLoading.value = false
    isValid.value = true;
    isError.value = true;
  }, 1000)

}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 20%;
  // justify-content: center;
  // padding-top: 100px;
  padding: 30px 30px 15px 30px !important;
  padding-inline: 48px;
  height: 100%;

  .img {
    height: 40%;
  }

  .information {
    height: 30%;

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

  .t-otp {
    height: 20%;
  }

  .ref-code {
    height: 10%;
    display: flex;
    align-items: end;
    // margin-bottom: -40px !important;
  }


}
</style>
