import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: " application/json",
  },
});

export const fetchService = {
  async get(endpoint, params = {}) {
    try {
      const response = await instance.get(endpoint, { params });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  },

  async post(endpoint, data = {}, params = {}) {
    
    try {
      const response = await instance.post(endpoint, data, { params });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  },

  async put(endpoint, data = {}, params = {}) {
    
    try {
      const response = await instance.put(endpoint, data, { params });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  },

  async delete(endpoint, params = {}) {
    try {
     
      const response = await instance.delete(endpoint, { params });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  },


};
