import { permute } from 'lodash-permute';

export const getReducers = modules => {
    let reducers = {};
    modules.forEach((module) => {
        reducers[module.constants.NAME] = module.reducer
    });

    return reducers
};

export const orderArrForIndex = (arr, order) => {

    return permute(arr, order)
};
