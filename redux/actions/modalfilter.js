import { SET_MODALFILTER, SET_RADIOFILTER } from './types'

export const setModalfilter = (visible) => ({
    type: SET_MODALFILTER,
    data: visible
})

export const setRadioFilter = (index) => ({
    type: SET_RADIOFILTER,
    data: index
})
