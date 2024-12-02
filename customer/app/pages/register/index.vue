<template>
  <NuxtLayout>
    <div class="container">

    </div>

    <template v-slot:bottom>
      <div class="ma-8">
        <VBtn block color="black" size="large">
          <label for=""> {{ eventEnum[events] }} </label>
        </VBtn>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
  const eventEnum = {
    0 : "Next",
    1 : "Submit"
  }
  const events = 0;

</script>
