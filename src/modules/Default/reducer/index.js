import * as t from '../actions/types';

export const InitialState = '';

export default (state =  InitialState, { type, payload }) => {
    switch(type) {
        case t.FETCH_DEFAULT_SUCCESS:
            return payload;
        default:
            return state;
    }
}