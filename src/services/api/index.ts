import { QueryCache, QueryClient } from "@tanstack/react-query";

import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import store from "@/store";

export const authRequest = axios.create({
	baseURL: import.meta.env.VITE_API_AUTH
});

export const request = axios.create({
	baseURL: import.meta.env.VITE_API_URL
});

export const generalRequest = axios.create({
	baseURL: import.meta.env.VITE_API_GENERAL_API_URL
});

[authRequest, request, generalRequest].forEach((instance: AxiosInstance) => {
	const token = store.getState()?.auth?.token || localStorage.getItem("token");

	instance.interceptors.request.use(
		(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
			if (token) config.headers["Authorization"] = "Bearer " + token;
			return config;
		},
		(error: AxiosError | Error) => Promise.reject(error)
	);

	instance.interceptors.response.use(
		(response: AxiosResponse): AxiosResponse => response,
		(error: AxiosError | Error) => Promise.reject(error)
	);
});

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

export const queryCache = new QueryCache({
	onSuccess: (data) => {
		console.log("queryCache success", data);
	},
	onError: (error) => {
		console.log("queryCache error", error);
	}
});

queryCache.clear();

export interface IResponseData<TData = any> {
	success: boolean;
	message: string;
	code: number;
	data: TData;
}
