import axios from 'axios';
import { API_URL } from 'helper/constans';
import * as t from './types';

export const fetchNews = () => async dispatch =>  {
    dispatch({ type: t.FETCH_NEWS_START });

    try {
        const response = await axios.get(`${ API_URL }/news`);

        return dispatch({ type: t.FETCH_NEWS_SUCCESS, payload: response.data })
    } catch (error) {

        return dispatch({ type: t.FETCH_NEWS_FAILURE, payload: error.response })
    }
};

export const fetchNewsHooks = async () =>  {
    try {
        const response = await axios.get(`${ API_URL }/news`);

        return response.data
    } catch (error) {

        return error.response
    }
};

