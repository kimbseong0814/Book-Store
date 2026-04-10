import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: getToken() ? true : false, // 초기값
  storeLogin: (token: string) => {
    set({ isLoggedIn: true });
    setToken(token);
  }, // 초기값이 로그인을 하면 true로 변경
  storeLogout: () => {
    set({ isLoggedIn: false });
    removeToken();
  } // 로그아웃을 하면 false로 변경
}));