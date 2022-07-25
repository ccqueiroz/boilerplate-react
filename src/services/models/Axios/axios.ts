import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AxiosInterfaceMethods {
  mapRequestOptions: (options: AxiosRequestConfig) => AxiosRequestConfig;
  handleRequest: <T>(promise: Promise<AxiosResponse<T>>) => Promise<T | undefined> | Promise<never>;
  get: <T>(url: string, options?: AxiosRequestConfig<T>) => Promise<T>;
  post: <T>(url: string, data: T, options?: AxiosRequestConfig<T>) => Promise<T>;
  put: <T>(url: string, data: T, options?: AxiosRequestConfig<T>) => Promise<T>;
  patch: <T>(url: string, data: T, options?: AxiosRequestConfig<T>) => Promise<T>;
  delete: <T>(url: string, options: AxiosRequestConfig) => Promise<T>;
}
