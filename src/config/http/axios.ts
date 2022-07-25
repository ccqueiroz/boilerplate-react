import { AxiosInterfaceMethods } from './../../services/models/Axios/axios';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestError } from './requestError';

export class Axios implements AxiosInterfaceMethods {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  mapRequestOptions<T>(options: AxiosRequestConfig<T>) {
    return options;
  }

  public useInterceptor(interceptor: (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>) {
    return this.instance.interceptors.request.use(interceptor, (error) => {
      console.error('[Axios] error', error);
      return Promise.reject(error);
    });
  }

  async handleErrors(error: AxiosError | Error) {
    let errMsg: string | undefined = undefined;
    if (error instanceof AxiosError) {
      errMsg = String(error?.response?.data);
      return Promise.reject(new RequestError(errMsg, error.response));
    } else {
      return Promise.reject(new RequestError(error.message, undefined));
    }
  }

  private hasErrorByStatus = (status: number) => {
    const s = status.toString();
    console.log('s', typeof s);
    const codeSuccess = ['200', '201', '203', '204'];
    const verifyError = codeSuccess.find((code) => code === s);
    console.log('verifyError', verifyError);
    return !!verifyError;
  };

  async handleRequest<T>(promise: Promise<AxiosResponse<T>>) {
    return promise
      .then((res) => {
        const { data, status } = res;
        console.log('data res', data);
        console.log('status res', status);
        if (!this.hasErrorByStatus(status)) {
          return Promise.reject(new Error());
        }
        return Promise.resolve(data);
      })
      .catch(this.handleErrors.bind(this));
  }

  public async get<T>(url: string, options: AxiosRequestConfig<T> = {}) {
    return this.handleRequest<T>(
      this.instance.get(
        url,
        this.mapRequestOptions({
          ...{
            data: {},
            ...options,
            headers: {
              accept: 'application/json',
              ...options.headers,
            },
          },
        }),
      ),
    );
  }

  public async post<T>(url: string, data: T, options: AxiosRequestConfig = {}) {
    return this.handleRequest<T>(
      this.instance.post(
        url,
        data,
        this.mapRequestOptions<T>({
          ...options,
        }),
      ),
    );
  }

  public async put<T>(url: string, data: T, options: AxiosRequestConfig = {}) {
    return this.handleRequest<T>(
      this.instance.put(
        url,
        data,
        this.mapRequestOptions<T>({
          ...options,
        }),
      ),
    );
  }

  public async patch<T>(url: string, data: T, options: AxiosRequestConfig = {}) {
    return this.handleRequest<T>(
      this.instance.patch(
        url,
        data,
        this.mapRequestOptions<T>({
          ...options,
        }),
      ),
    );
  }

  public async delete<T>(url: string, options: AxiosRequestConfig = {}) {
    return this.handleRequest<T>(
      this.instance.delete(url, {
        ...options,
      }),
    );
  }
}
