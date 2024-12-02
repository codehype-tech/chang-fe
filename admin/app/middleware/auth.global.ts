// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");
  const router = useRoute();

  // Skip the middleware for the login page
  if (to.path === "/signin") {
    return;
  }

  if (!token.value) {
    return navigateTo("/signin");
  }

  // Use the API key for authentication logic if needed
});
