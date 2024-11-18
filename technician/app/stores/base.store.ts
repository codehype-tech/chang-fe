// Define the state type
interface BaseState {
  count: number;
}

export const useBaseStore = defineStore("base", {
  state: (): BaseState => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state): number => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
