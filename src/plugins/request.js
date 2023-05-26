import axiosRequest from './axiosInstance.js'
async function request(method, url, data) {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    return json
  }
  export function get(url,data){
    return axiosRequest({
        url:url,
        method:'get',
        params:data
    })
  }
  export function post(url, data) {
    return request('POST', url, data)
  }