// Define the state type
interface BaseState {
  isLoading: boolean;
}

export const useBaseStore = defineStore("base", () => {
  const baseData = ref<BaseState>({ isLoading: false });

  function doLoading() {
    baseData.value.isLoading = true;
  }

  function unLoading() {
    baseData.value.isLoading = false;
  }

  return { baseData, doLoading, unLoading };
});
