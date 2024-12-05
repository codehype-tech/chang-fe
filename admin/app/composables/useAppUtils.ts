// composables/useSecretKey.ts
export const useAppUtils = () => {
  const route = useRoute();

  function useRouteCurrentRouteName() {
    switch (route.path) {
      case "/dashboard":
        return "Booking Management";
      case "/developer":
        return "Develop Management";

      default:
        return "";
    }
  }

  return { useRouteCurrentRouteName };
};
