<template>
  <div class="signin-container">
    <v-form
      class="signin-form-container"
      v-model="valid"
      @submit.prevent="doSignin"
    >
      <v-img src="@/assets/images/logo.svg" class="img-logo" :height="56">
      </v-img>
      <label for="" class="f-login mt-11">{{ $t("pages.login.login") }}</label>
      <label for="" class="f-desc mt-5">
        {{ $t("pages.login.title") }}
      </label>

      <AppTextField
        class="w-100 mt-11 txf"
        :placeholder="$t('pages.login.username')"
        style="color: white"
        :label="$t('pages.login.username')"
        is-required
      />

      <AppTextField
        class="w-100 txf"
        :placeholder="$t('pages.login.password')"
        :label="$t('pages.login.password')"
        :type="hidePassword ? 'password' : 'text'"
        is-required
      >
        <template #append-inner>
          <v-icon
            @click="toggleHidePassword"
            :icon="hidePassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          >
          </v-icon>
        </template>
      </AppTextField>

      <v-btn
        block
        :loading="isLoading"
        class="mt-11 text-none"
        size="large"
        text="Login"
        type="submit"
        style="color: #404dff"
      >
      </v-btn>

      <label for="" class="l-forgot-pass mt-4">{{
        $t("pages.login.forgotPassword")
      }}</label>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
const hidePassword = ref(true);
const token = useCookie("token");
const isLoading = ref(false);
const valid = ref(false);

function toggleHidePassword() {
  hidePassword.value = !hidePassword.value;
}

function doSignin() {
  if (valid.value) {
    isLoading.value = true;

    setTimeout(() => {
      token.value = "it's me";
      navigateTo("/dashboard", { replace: true });
      isLoading.value = false;
    }, 1500);
  }
}
</script>

<style lang="scss" scoped>
.signin-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #424bba, #131122);
}

.signin-form-container {
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 30%;
  background-color: #00000017;
  backdrop-filter: blur(6px); /* Apply a 10px blur effect */
  padding: 44px;

  @include respond-to(tablet) {
    width: 85%;
  }
}

.f-login {
  @include apply-font-styles($white, 36px);
  text-align: center;
}

.f-desc {
  @include apply-font-styles($white);
  text-align: center;
}

.l-forgot-pass {
  @include apply-font-styles($white);
  text-decoration: underline;
  cursor: pointer;
}

.img-logo {
  width: 60%;

  @include respond-to(tablet) {
    width: 100%;
  }
}

.txf {
  @include apply-font-styles($white);
}
</style>
