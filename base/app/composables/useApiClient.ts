import type { UseFetchOptions } from "#app";

class ApiClient {
  private static instance: ApiClient;
  baseURL: string;

  private constructor() {
    const config = useRuntimeConfig();
    this.baseURL = config.public.apiBaseUrl as string;
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public async fetch<T>(
    endpoint: string,
    options?: UseFetchOptions<T>
  ): Promise<T> {
    const token = useCookie("auth_token").value || "";

    return $fetch<T>(endpoint, {
      baseURL: this.baseURL ?? "",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

// Export a composable function to access the singleton
export function useApiClient() {
  return ApiClient.getInstance();
}
