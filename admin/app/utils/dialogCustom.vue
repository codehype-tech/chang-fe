<template>
    <v-dialog v-model="props.modelValue" max-width="600">
        <v-card class="dialog-container">
            <div class="dialog-header">
                <h2>{{ props.title }}</h2>
                <v-btn icon="mdi-close" variant="text" @click="closeDialog"></v-btn>
            </div>
            <div class="dialog-body">
                <slot name="body"></slot>
            </div>
            <div class="dialog-footer">
                <v-btn color="primary" style="color: white" base-color="primary" class="text-none w-100"
                    :loading="props.loading" :disabled="props.loading" @click="submitDialog">{{ props.textBtn ??
                    'Submit' }}</v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<style lang="scss" scoped>

.dialog-container {}

.dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    padding: 16px;


}

.dialog-body {
    padding: 16px;
    padding-bottom: 0px;
    border-bottom: 1px solid #e0e0e0;
    overflow-y: auto;

}

.dialog-footer {
    padding-top: 0px;
    padding: 16px;

}
</style>
<script setup lang="ts">
interface DialogProps {
    modelValue: boolean
    title: string
    textBtn?: string
    loading?: boolean
    onClose?: () => void
}
import { defineProps, defineEmits } from 'vue'
const props = defineProps<DialogProps>()
const emit = defineEmits(['update:modelValue', 'submit'])


// ฟังก์ชันปิด Dialog
const closeDialog = () => {
    emit('update:modelValue', false)
    props.onClose?.()
}

const submitDialog = () => {
    emit('submit', props);
}
</script>