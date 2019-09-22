import * as t from '../actions/types';


export const InitialState = {
    data: null,
    isLoading: false,
    error: null,
};

export default (state =  InitialState, { type, payload }) => {
    switch(type) {
        case t.FETCH_NEWS_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case t.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
            };
        case t.FETCH_NEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        default:
            return state
    }
}