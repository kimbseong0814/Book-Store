import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../store/authStore";

const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config? : AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() ? getToken() : "",
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
      // 로그인 만료 처리
      if (error.response.status === 401) {
        removeToken();
        window.location.href = "/login";
        return;
      }
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();

function removeToken() {
  throw new Error("Function not implemented.");
}
