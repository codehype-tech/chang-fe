interface PhoneState {
    phoneNumber: string;
}

export const usePhoneStore = defineStore("phone", {
    state: (): PhoneState => ({
        phoneNumber: "",
    }),
    getters: {
        getPhoneNumber: (state) => state.phoneNumber,
    },
    actions: {
        setPhoneNumber(phoneNumber: string) {
            this.phoneNumber = phoneNumber;
        },
    },
});