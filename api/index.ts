import axios from "axios";

const instance = axios.create({
  baseURL: 'http://app.xn----8sburvngh0h.xn--p1ai'
})

export const api = instance;