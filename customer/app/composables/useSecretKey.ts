// composables/useSecretKey.ts
export const useSecretKey = () => {
  const config = useRuntimeConfig();
  console.log("config.secretApiKey", config.secretApiKey);
  return config.secretApiKey;
};
