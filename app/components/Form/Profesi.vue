<script lang="ts" setup>
import { z } from 'zod'

const schema = z.object({
    // Monthly income
    income: z.number()
})

const state = reactive({
    income: undefined,
})

const result = computed<number>(() => Math.abs(Number((state.income || 0) * 2.5 / 100)))
</script>

<template>
    <UForm :schema="schema" :state="state" class="space-y-4">
        <UFormGroup label="Gaji bulanan" name="income">
            <InputMoney v-model="state.income" size="xl" />
        </UFormGroup>
        <br class="hidden lg:block" />
        <UFormGroup label="Zakat yang harus dibayar">
            <h4 class="text-2xl lg:text-3xl text-primary">{{ toRupiah(result) }}</h4>
        </UFormGroup>
    </UForm>
</template>