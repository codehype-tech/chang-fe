<template>
  <div
    style="display: flex; flex-direction: column"
    v-bind:class="$attrs.class"
  >
    <label v-bind:class="$attrs.class"
      >{{ $attrs.label }}
      <label v-if="props.isRequired" class="l-required">*</label>
    </label>
    <v-text-field
      v-bind:class="$attrs.color"
      v-bind:placeholder="placeHolderCompute"
      v-bind:type="typeCompute"
      :rules="fieldRules"
    >
      <template #append-inner>
        <slot name="append-inner"></slot>
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import { useValidate } from "~/composables/useValidate";

const props = defineProps<{ isRequired?: boolean }>();
const attrs = useAttrs();
const placeHolderCompute: ComputedRef<string> = computed(
  () => attrs.placeholder as string
);

const { useRequired } = useValidate();
const typeCompute: ComputedRef<string> = computed(() => attrs.type as string);

const fieldRules = computed(() => [useRequired]);
</script>

<style lang="scss">
.l-required {
  color: $error;
}
</style>
