import axios from 'axios'

const tractianApi = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tractian/fake-api',
})

export default tractianApi
