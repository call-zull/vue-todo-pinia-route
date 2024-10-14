import { defineStore } from 'pinia'

export const useCounterStore = defineStore('count', {
    state: () => ({ count: 4, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      decrement() {
        this.count--
      },
      increment() {
        this.count++
      },
    },
})