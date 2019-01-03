import {handleActions} from 'redux-actions'
import {
    DATA_LIST,
    AREA_DATA
} from '../constent'

let initalState = {
    cityData: [],
    AreaData: []
}

export const Reducers = handleActions({
    DATA_LIST:(state,action)=>({...state,cityData:action.payload}),
    AREA_DATA:(state,action)=>({...state,AreaData:action.payload})
},initalState)