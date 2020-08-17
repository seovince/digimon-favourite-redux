import { 
    SET_ALLDIGIMON, 
    SET_FRESHDIGIMON, 
    SET_TRAININGDIGIMON, 
    SET_ROOKIEDIGIMON, 
    SET_CHAMPIONDIGIMON, 
    SET_ULTIMATEDIGIMON, 
    SET_MEGADIGIMON,
    FILTER_ALLDIGIMON,
    FILTER_LEVELDIGIMON
} from './types'

export const setAllDigimon = (data) => ({
    type: SET_ALLDIGIMON,
    data: data
})

export const setFreshDigimon = (data) => ({
    type: SET_FRESHDIGIMON,
    data: data
})

export const setTrainingDigimon = (data) => ({
    type: SET_TRAININGDIGIMON,
    data: data
})

export const setRookieDigimon = (data) => ({
    type: SET_ROOKIEDIGIMON,
    data: data
})

export const setChampionDigimon = (data) => ({
    type: SET_CHAMPIONDIGIMON,
    data: data
})

export const setUltimateDigimon = (data) => ({
    type: SET_ULTIMATEDIGIMON,
    data: data
})

export const setMegaDigimon = (data) => ({
    type: SET_MEGADIGIMON,
    data: data
})

export const filterDigimons = (data) => ({
    type: FILTER_ALLDIGIMON,
    data: data
})

export const filterLevelDigimons = (data) => ({
    type: FILTER_LEVELDIGIMON,
    data: data
})