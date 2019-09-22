import { combineReducers } from 'redux';
import modules from '../modules';
import { getReducers } from '../helper/functions';


const rootReducer = combineReducers({
    ...getReducers(modules)
});

export default rootReducer
