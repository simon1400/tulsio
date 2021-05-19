import axios from 'axios'

const AxiosAPI = axios.create({
  baseURL: process.env.APP_API,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // }
})

export default AxiosAPI
