import actionTypes from './actionTypes';

export const fetchTablesData = (data) => ({
    type: actionTypes.TABLES_DATA,
    payload: data
})

export const saveCommunityCards = (data) => ({
    type: actionTypes.COMMUNITY_CARDS,
    payload: data
})