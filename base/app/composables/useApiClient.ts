import type { UseFetchOptions } from "#app";

class ApiClient {
  private static instance: ApiClient;
  baseURL: string;
  private token: string;

  private constructor() {
    const config = useRuntimeConfig();
    this.baseURL = config.public.apiBaseUrl as string;
    this.token = useCookie("auth_token").value || "";
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public async fetch<T>(endpoint: string, options?: UseFetchOptions<T>) {
    return useFetch<T>(endpoint, {
      baseURL: this.baseURL ?? "",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}

// Export a composable function to access the singleton
export function useApiClient() {
  return ApiClient.getInstance();
}
