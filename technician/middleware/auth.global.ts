// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();
  console.log("Secret API Key:", config.secretApiKey);

  // Use the API key for authentication logic if needed
});
