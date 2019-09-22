import { API_URL } from 'helper/constans';
import * as t from './types';
import axios from "axios";

export const login = data => async dispatch =>  {
    dispatch({ type: t.LOG_IN_START });

    try {
        const response = await axios.post(`${ API_URL }/validate`, data);
        if (response.data.status === 'ok') {
            dispatch({ type: t.LOG_IN_SUCCESS, payload: response.data });

        }else{
            dispatch({ type: t.LOG_IN_FAILURE, payload: response.data });
        }

        return response.data
    } catch (error) {
        dispatch({ type: t.LOG_IN_FAILURE, payload:  error.response });

        return error
    }
};

export const logout = () => async dispatch =>  {
    dispatch({ type: t.LOG_OUT_SUCCESS })
};

export const fetchProfile = id => async dispatch =>  {
    dispatch({ type: t.FETCH_PROFILE_START });


    try {
        const response = await axios.get(`${ API_URL }/user-info/${ id }`);
        if (response.data.status === 'ok') {
            dispatch({ type: t.FETCH_PROFILE_SUCCESS, payload: response.data });

        }else{
            dispatch({ type: t.FETCH_PROFILE_FAILURE, payload: response.data });
        }

        return response.data
    } catch (error) {
        dispatch({ type: t.FETCH_PROFILE_FAILURE, payload:  error.response });

        return error.response
    }
};