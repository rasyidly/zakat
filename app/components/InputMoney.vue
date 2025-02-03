<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])

const model = ref()

function maska({ detail }: { detail: { unmasked: string } }) {
    emit('update:modelValue', Number(detail.unmasked || 0))
}
</script>

<template>
    <UInput v-model="model" v-maska="'9.99#'" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed @maska="maska">
        <template #leading>
            <span class="text-muted text-sm">Rp</span>
        </template>
    </UInput>
</template>