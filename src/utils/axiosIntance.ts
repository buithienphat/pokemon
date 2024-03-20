import axios from "axios";
import { BASE_URL } from "../constans/inviroments";
import Cookies from "js-cookie";

const axiosIntance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Thêm một bộ đón chặn request
axiosIntance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    }
    console.log("config", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
axiosIntance.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;
    console.log("first", originalRequest);

    if (
      (error.response?.status === 403 || error.response?.status === 401) &&
      !!!originalRequest.retry
    ) {
      originalRequest.retry = true;
      try {
        // Gọi API để cập nhật token mới
        const res = await axiosIntance.put("/customer/refresh", {
          refreshToken: Cookies.get()?.refreshToken,
        });
        console.log("res", res);
        const { token, refreshToken } = res.data || {};

        // Lưu lại token mới vào local storage hoặc cookie
        Cookies.set("token", token);
        Cookies.set("refreshToken", refreshToken);

        // Thay đổi token trong header của yêu cầu ban đầu
        originalRequest.headers.Authorization = `Bearer ${token}`;

        // Gọi lại yêu cầu ban đầu với token mới
        return axiosIntance(originalRequest);
      } catch (error) {
        // Xử lý lỗi nếu không thể cập nhật token mới
        Cookies.remove("token");
      }
    }
    console.log("loi eroor", originalRequest);
    console.log("error", error);
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  }
);

export default axiosIntance;
