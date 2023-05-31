import { TOKEN, AUTH_TOKEN_HEADER } from "./constants";

export const requestHandler = (request: any) => {
  const token = localStorage.getItem(TOKEN) || sessionStorage.getItem(TOKEN);
  if (token && request.headers) {
    request.headers[AUTH_TOKEN_HEADER] = `Bearer ${token}`;
  }
  return request;
};

export const successResponseHandler = (response: any) => {
  return {
    ...response,
    data: response.data,
  };
};

export const errorResponseHandler = (error: any) => {
  if (error.response && error.response.status === 401) {
    const isLoginPage = window.location.pathname === "/login";
    if (!isLoginPage) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      window.location.reload();
    }
  }
  return Promise.reject(error);
};
