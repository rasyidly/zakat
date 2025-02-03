<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<template>
    <ClientOnly>
        <UButton :icon="isDark ? Icon.Moon : Icon.Sun" color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>
