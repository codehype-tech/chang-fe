<template>
  <div
    style="display: flex; flex-direction: column"
    v-bind:class="$attrs.class"
  >
    <label class="l-title"
      >{{ $attrs.label }}
      <label v-if="props.isRequired" class="l-required">*</label>
    </label>
    <v-text-field
      class="l-title"
      v-bind:placeholder="placeHolderCompute"
      v-bind:type="typeCompute"
    >
      <template #append-inner>
        <slot name="append-inner"></slot>
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ isRequired?: boolean }>();
const attrs = useAttrs();

const placeHolderCompute: ComputedRef<string> = computed(
  () => attrs.placeholder as string
);

const typeCompute: ComputedRef<string> = computed(() => attrs.type as string);
</script>

<style lang="scss">
.l-required {
  color: $error;
}

.l-title {
  @include apply-font-styles($white);
}
</style>
