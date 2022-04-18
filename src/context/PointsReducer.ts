import {ADD_POINTS, REMOVE_POINTS, SET_POINTS} from './actions';

export const PointsReducer = (state: any, action: any)=>{

    switch(action.type){
        case ADD_POINTS:
            return {
                ...state,
                points: state.points + action.payload
            };
        case REMOVE_POINTS:
            return {
                ...state,
                points: state.points - action.payload
            };
        case SET_POINTS:
            return {
                ...state,
                points: action.payload
            }
        default: return state
    }
}