import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL ='https://653d4ae8f52310ee6a9a14ef.mockapi.io/'

export const fetchAdverts = async () => {
    try {
      const responce = await axios.get('/adverts');
      return responce.data;
    } catch (error) {

    console.log(error)
    }
  };

  export const getAdsThunk=createAsyncThunk(
    'adverts/fetchAll',
    async () => {
      return await fetchAdverts();
    }
  );