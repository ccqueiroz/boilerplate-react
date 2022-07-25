import { AxiosResponse } from 'axios';

export class RequestError extends Error {
  response: AxiosResponse<unknown, any> | undefined;

  constructor(message: string, response: AxiosResponse<unknown, any> | undefined) {
    super(message);
    this.name = 'RequestError';
    this.response = response;
  }
}
