import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from './axios'


export const fetchAds = createAsyncThunk('ads/fetchAds', async () => {
    const { data } = await axios.get('/AddNew');
    return data;
})

export const fetchCategory = createAsyncThunk('ads/fetchCategory', async () => {
    const { data } = await axios.get('/category');
    return data;
  });

const initialState = {
    ads: {
        items: [],
        status: 'loading'
    },
    category: {
        items: [],
        status: 'loading'
    }
}

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {},
    extraReducers: {
        // ПОЛУЧЕНИЕ ОБЪЯВЛЕНИЙ
        [fetchAds.pending]: (state) => {
            state.ads.items = []
            state.ads.status = 'loading'
        },
        [fetchAds.fulfilled]: (state, action) => {
            state.ads.items = action.payload
            state.ads.status = 'loaded'
        }, 
        [fetchAds.rejected]: (state) => {
            state.ads.items = []
            state.ads.status = 'error'
        },   
        // ПОЛУЧЕНИЕ КАТЕГОРИЙ
        [fetchCategory.pending]: (state) => {
            state.category.items = [];
            state.category.status = 'loading';
          },
          [fetchCategory.fulfilled]: (state, action) => {
            state.category.items = action.payload;
            state.category.status = 'loaded';
          },
          [fetchCategory.rejected]: (state) => {
            state.category.items = [];
            state.category.status = 'error';
          },
    }
})

export const adsReducer = adsSlice.reducer;