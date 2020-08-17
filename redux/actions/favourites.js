import { ADD_FAVOURITE, DELETE_FAVOURITE } from './types'

export const addFavourite = (data) => ({
    type: ADD_FAVOURITE,
    data: data
})

export const deleteFavourite = (key) => ({
    type: DELETE_FAVOURITE,
    key: key
})