import axios, { AxiosResponse } from "axios";
import { TypeCommon } from "../models/common";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config: TypeCommon) => {
    const token = localStorage.getItem("user_token");
    // let userInfo = localStorage.getItem("user_info");

    // Đảm bảo headers luôn được khởi tạo
    if (!config.headers) {
      config.headers = {} as TypeCommon;
    }

    // Set default headers
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...config.headers,
    };

    // Luôn set Bearer token nếu có token
    if (token) {
      // Đảm bảo token được format đúng với "Bearer " prefix
      const bearerToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
      config.headers.Authorization = bearerToken;
      config.headers.is_web = true;
    }

    // if (userInfo) {
    //   try {
    //     let parsedUserInfo = JSON.parse(userInfo);

    //     // Nếu có organization, đặt giá trị null
    //     if (parsedUserInfo.organization) {
    //       parsedUserInfo.organization = null;
    //     }

    //     if (parsedUserInfo.owner_services && Array.isArray(parsedUserInfo.owner_services)) {
    //       // Tìm service có url === "/tennaiikan"
    //       const matchedService = parsedUserInfo.owner_services.find((service: TypeCommon) => service.url === "/tennaiikan");

    //       // Nếu tìm thấy, giữ lại duy nhất service đó, nếu không thì gán rỗng
    //       if (matchedService) {
    //         parsedUserInfo.owner_services = [matchedService];
    //       } else {
    //         parsedUserInfo.owner_services = [];
    //       }
    //     }

    //     userInfo = JSON.stringify(parsedUserInfo);
    //   } catch (error) {
    //     console.error("Error parsing userInfo:", error);
    //   }

    //   config.headers["X-User-Info"] = btoa(unescape(encodeURIComponent(userInfo)));
    // }

    config.counter = config.counter || 0;
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

export function getEnvironment() {
  if (window.location.host.includes("staging") || window.location.host.includes("localhost")) {
    return "staging";
  }
  return "benri";
}

export function getCognitoConfig() {
  const environment = getEnvironment();

  const config = {
    staging: {
      cognitoClientId: "ke60sjpuo295i99e9j2n594q0",
      cognitoEndpoint: "https://ap-northeast-16rlejhmhi.auth.ap-northeast-1.amazoncognito.com/oauth2/token",
    },
    benri: {
      cognitoClientId: "1eai0ai2k380cmvrk68jh35u6n",
      cognitoEndpoint: "https://summit-hshc-user-pool-dev.auth.ap-northeast-1.amazoncognito.com/oauth2/token",
    },
  };

  return config[environment];
}

const getNewIdToken = async () => {
  const { cognitoClientId, cognitoEndpoint } = getCognitoConfig();

  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) return null;

  const requestBody = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: cognitoClientId,
    refresh_token: refreshToken,
  });

  try {
    const response = await fetch(cognitoEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: requestBody.toString(),
    });

    if (!response.ok) throw new Error("Failed to refresh token");

    const data = await response.json();
    const idToken = data.id_token;

    if (idToken) {
      localStorage.setItem("user_token", idToken);
      return idToken;
    }
    return null;
  } catch (error) {
    return null;
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
      originalRequest.counter = originalRequest.counter || 0;

      if (originalRequest.counter < 1) {
        originalRequest.counter += 1;

        const newToken = await getNewIdToken();
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        }
      }

      window.location.href = "/login";
      localStorage.clear();
    }

    return Promise.reject(error);
  }
);

export const get = (
  url: string,
  params?: TypeCommon,
  headers?: TypeCommon
): Promise<AxiosResponse> => {
  return axiosInstance.get(url, {
    headers,
    params,
  });
};
export const post = (
  url: string,
  body?: TypeCommon,
  params?: TypeCommon,
  headers?: TypeCommon
): Promise<AxiosResponse> => {
  return axiosInstance.post(url, body, {
    headers,
    params,
  });
};
export const put = (
  url: string,
  body?: TypeCommon,
  params?: TypeCommon,
  headers?: TypeCommon
): Promise<AxiosResponse> => {
  return axiosInstance.put(url, body, {
    headers,
    params,
  });
};
export const patch = (
  url: string,
  body?: TypeCommon,
  params?: TypeCommon,
  headers?: TypeCommon
): Promise<AxiosResponse> => {
  return axiosInstance.patch(url, body, {
    headers,
    params,
  });
};
export const deleteMethod = (
  url: string,
  data?: TypeCommon,
  params?: TypeCommon,
  headers?: TypeCommon
): Promise<AxiosResponse> => {
  return axiosInstance.delete(url, {
    data,
    headers,
    params,
  });
};
