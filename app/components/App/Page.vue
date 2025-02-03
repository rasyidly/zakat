<script lang="ts" setup>
const props = defineProps<{
    title?: string,
    description?: string
}>()

useHead({
    title: props.title
})
</script>

<template>
    <div class="space-y-4">
        <div class="space-y-2 text-center">
            <slot name="title">
                <h1 class="text-3xl" v-html="title"></h1>
            </slot>
            <slot name="description">
                <div class="text-muted text-sm" v-html="description"></div>
            </slot>
        </div>
        <br />
        <slot />
    </div>
</template>