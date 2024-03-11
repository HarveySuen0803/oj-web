import axios from 'axios'

axios.interceptors.request.use(
  cfg => {
    return cfg
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  rep => {
    if (rep.data.code != 0) {
      return Promise.reject(rep.data.msg)
    }
    return rep
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)