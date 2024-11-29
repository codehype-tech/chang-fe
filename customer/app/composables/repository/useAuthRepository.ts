import { ApiPaths } from "~/const/ApiPaths";
import type { RegisterPhoneNumberRequest } from "~/models/dto/request/RegisterPhoneNumberRequest";
import type { RegisterPhoneNumberResponse } from "~/models/dto/response/RegisterPhoneNumberResponse";

export function useAuthRepository() {
  const apiClient = useApiClient();

  async function useRegisterPhoneNumber(
    payload: RegisterPhoneNumberRequest
  ): Promise<RegisterPhoneNumberResponse | unknown> {
    return await apiClient.fetch<RegisterPhoneNumberResponse>(
      ApiPaths.REGISTER_PHONE_NUMBER,
      { body: payload }
    );
  }

  return { useRegisterPhoneNumber };
}
