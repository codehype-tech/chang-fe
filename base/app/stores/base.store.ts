// Define the state type
interface BaseState {
  isLoading: boolean;
}

export const useBaseStore = defineStore("base", () => {
  const baseData = ref<BaseState>({
    isLoading: false,
  });

  const baseSnackData = reactive<{
    isShowSnack: boolean;
    snackMessage: string;
    type: "error" | "success" | undefined;
  }>({
    isShowSnack: false,
    snackMessage: "",
    type: undefined,
  });

  function doLoading() {
    baseData.value.isLoading = true;
  }

  function unLoading() {
    baseData.value.isLoading = false;
  }

  function doShowSnack(
    message: string,
    options?: { type: "error" | "success" | undefined }
  ) {
    baseSnackData.snackMessage = message;
    baseSnackData.type = options?.type;
    baseSnackData.isShowSnack = true;
  }

  function doHideSnack() {
    baseSnackData.snackMessage = "";
    baseSnackData.type = undefined;
    baseSnackData.isShowSnack = false;
  }

  return {
    baseData,
    baseSnackData,
    doLoading,
    unLoading,
    doShowSnack,
    doHideSnack,
  };
});
