import actionTypes from './actionTypes';
import {tableDefault} from "../data/tableDefault";

let INITIAL_STATE = {
    tablesData: tableDefault,
    communityCards: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TABLES_DATA:
            return {
                ...state,
                tablesData: action.payload
            }
        case actionTypes.COMMUNITY_CARDS:
            return {
                ...state,
                communityCards: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;