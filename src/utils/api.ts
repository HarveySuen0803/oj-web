import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 5000
})

api.defaults.withCredentials = true;

api.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    if (response.data.code == 200) {
      return response.data.data
    } else {
      return Promise.reject(response.data.msg || 'Error')
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default api