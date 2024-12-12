<template>
  <NuxtLayout>
    <div class="container">
      <div class="pt-5 img">
        <v-img :width="250" :height="248" cover src="@/assets/images/rafiki.svg"></v-img>
      </div>
      <div class="pt-4 information">
        <h2 class="t-title text-center">{{ $t("pages.verify-phone-number.title") }}</h2>
        <div class="t-label pt-4">
          <label for=""> {{ $t("pages.verify-phone-number.desc") }}</label>

        </div>
      </div>
      <div class="t-phone">
        <div class="d-flex align-center">
          <p class=" pe-2">66+</p>
          <v-form class="w-100">
            <v-text-field :rules="phoneRules"  v-model="phoneNumber" maxlength="10" label="Enter Phone Number"
              placeholder="Enter Phone Number"></v-text-field>
          </v-form>

        </div>
        <!-- <div v-if="!isValid" class="t-validation text-red">{{ $t("pages.verify-phone-number.err") }}</div> -->
      </div>
    </div>
    <template v-slot:bottom>
      <div class="ma-8">
        <VBtn :disabled="!isValid" block color="black" size="large" @click="onNext">
          <label for="" class="text-none"> {{ $t("btn.btn-next") }} </label>
        </VBtn>
      </div>
    </template>
  </NuxtLayout>
</template>


<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { usePhoneStore } from '@/stores/phone.store';


const { t } = useI18n();
const phoneNumber = ref("");
const isValid = ref(false);
const messageErr = t("pages.verify-phone-number.err");
const phoneRules = [
  (v: any) => !!v.trim() || messageErr,
  (v: string) => /^[0-9]+$/.test(v.trim()) || messageErr,
  (v: string) => v.trim().length >= 9 && v.trim().length <= 10 || messageErr,
];
const validatePhoneNumber = () => {
  const checkRules =  phoneRules.every(rule => {
    
    if( typeof rule(phoneNumber.value) === 'string'){
      return false
    }else{
      return true
    }
  });
  isValid.value = checkRules
};
watch(phoneNumber, validatePhoneNumber);

function onNext() {
  const phoneStore = usePhoneStore();
  phoneStore.setPhoneNumber(phoneNumber.value);
  navigateTo("/register/verify-otp");

}

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px !important;
  padding-inline: 48px;
  height: 100%;
.img{
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
        max-width: 70%;
        text-align: center
      }
    }
  }

  .t-phone {
    height: 30%;
    width: 100%;
    margin-top: 50px;

    .t-validation {
      font-size: 12px;
    }
  }


}
</style>
