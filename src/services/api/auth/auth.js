import { post } from '../../httpServices';

const authServiceBaseUrl = () => '/auth';
const loginRequestUrl = () => `${authServiceBaseUrl()}/login`;
const registerRequestUrl = () => `${authServiceBaseUrl()}/register`;

export const loginRequest = (body) => post(loginRequestUrl(), body);
export const registerRequest = (body) => post(registerRequestUrl(), body);