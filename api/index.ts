import axios from "axios";

const instance = axios.create({
  baseURL: 'http://89.169.38.135:3333/'
})

export const api = instance;