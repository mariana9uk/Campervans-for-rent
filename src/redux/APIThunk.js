import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL ='https://653d4ae8f52310ee6a9a14ef.mockapi.io/'
export const fetchAdverts = async ({page, perPage}) => {
    try {
    const responce = await axios.get('/adverts', {params: {
      page: page,
      limit: perPage
  }})
    console.log(responce.data)
      return responce.data;
     
    } catch (error) {

    console.log(error)
    }
  };

  export const getAdsThunk=createAsyncThunk(
    'adverts/fetchAll',
    async ({ page, perPage }) => {
      return await fetchAdverts({ page, perPage });
  }
  );