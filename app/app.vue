<script lang="ts" setup>
const title = 'Kalkulator Zakat'
const description = 'Kalkulator Zakat is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.'

useHead({
    titleTemplate: (chunk) => [chunk || false, title].filter(Boolean).join(' - '),
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
        { rel: 'icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
        lang: 'id'
    }
})

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    // ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    // twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
    // twitterCard: 'summary_large_image'
})

const links = [{
    label: 'Zakat Maal',
    to: '/'
}, {
    label: 'Zakat Profesi',
    to: '/profesi'
}]
</script>

<template>
    <div>
        <NuxtLoadingIndicator />
        <main class="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950">
            <div class="absolute top-4 end-4 z-20">
                <ColorModeButton />
            </div>
            <div class="fixed size-[60vw] rounded-full -top-1/2 -start-0 bg-primary-100 dark:bg-primary-500/40 blur-[10rem] z-0"></div>
            <div class="fixed size-[40vw] rounded-full -bottom-1/2 -end-0 bg-primary-200 dark:bg-primary-500/40 blur-[10rem] z-0"></div>
            <UContainer :ui="{ constrained: 'max-w-screen-xl w-full', base: 'grid lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 py-4' }">
                <div class="space-y-2 text-center lg:text-start">
                    <h1 class="text-3xl lg:text-6xl font-semibold">Hitung <span class="text-primary">Zakat</span></h1>
                    <p class="text-muted lg:text-lg">Dalam rangka mengisi waktu luang untuk bikin aplikasi ini, tapi semoga bermanfaat</p>
                    <br class="hidden lg:block" />
                    <div class="flex justify-center lg:justify-start gap-2">
                        <UButton variant="solid" size="lg" :icon="Icon.Share" label="Bagikan" />
                        <UButton variant="outline" size="lg" :icon="Icon.Code" label="Embed" />
                    </div>
                </div>
                <div class="space-y-4">
                    <UCard :ui="{ base: 'max-w-lg mx-auto', background: 'bg-white/50 dark:bg-white/5 backdrop-blur', ring: '', rounded: 'rounded-xl', shadow: 'shadow-2xl shadow-primary-400/30 dark:shadow-none', body: { padding: '!p-8' }, header: { padding: '!p-0' } }">
                        <template #header>
                            <UHorizontalNavigation :links="links" class="px-2 pt-0" />
                        </template>
                        <div class="space-y-8">
                            <Logo class="mx-auto" />
                            <NuxtPage />
                        </div>
                    </UCard>
                    <div class="text-xs text-muted text-center">
                        <span class="me-1">Made with 💚 by</span>
                        <ULink to="https://github.com/rasyidly" external target="_blank">Rasyidly</ULink>
                    </div>
                </div>
            </UContainer>
        </main>

        <UNotifications />
        <USlideovers />
        <UModals />
    </div>
</template>