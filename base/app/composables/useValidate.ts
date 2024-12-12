// composables/useSecretKey.ts
export const useValidate = () => {
  function useRequired(value?: string, options?: { label?: string }) {
    if (value?.trim()) return true;

    return options?.label ?? "Name is required.";
  }

  return {
    useRequired,
  };
};
