import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'

let axiosInstance: AxiosInstance | null = null

export function createAxiosInstance(config?: CreateAxiosDefaults): AxiosInstance {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL, // Базовый URL API из переменной окружения
    ...config, // Дополнительные настройки, переданные через параметр config
  })
}

export function useSharedAxios(): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = createAxiosInstance()
  }
  return axiosInstance // Возвращаем созданный экземпляр axios
}
