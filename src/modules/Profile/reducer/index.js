import * as t from '../actions/types';

export const InitialState = {
    id: null,
    info: null,
    error: null,
    isLoading: false,
};

export default (state =  InitialState, { type, payload }) => {
    switch(type) {
        case t.LOG_IN_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case t.LOG_IN_SUCCESS:
            return {
                ...state,
                ...payload.data,
                isLoading:false,
                error: null,
            };
        case t.LOG_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case t.LOG_OUT_SUCCESS:
            return {
                ...InitialState
            };
        case t.FETCH_PROFILE_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case t.FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                info: payload.data,
                isLoading:false,
                error: null,
            };
        case t.FETCH_PROFILE_FAILURE:
            return {
                ...state,
                info: null,
                isLoading: false,
                error: payload,
            };
        default:
            return state
    }
}