<template>
     <div class="mx-auto text-center mt-4">
        <h1 class="text-2xl">Ini Halaman Count</h1>

        <p class="text-lg">
            {{ countStore.count }}
            {{ countStore.name }}
            {{ countStore.doubleCount }}
        </p>
        <div class="flex justify-center gap-8">
            <button @click="countStore.decrement" class="bg-slate-300 p-1 rounded-md font-bold mt-2">Dec</button>
            <button @click="countStore.increment" class="bg-slate-300 p-1 rounded-md font-bold mt-2">Add</button>
        </div>
    </div>
</template>

<script>
import {useCounterStore} from '../stores/counterStore'

export default {
    setup() {
        const countStore = useCounterStore()
        return {
            countStore
        }
    }
}

</script>