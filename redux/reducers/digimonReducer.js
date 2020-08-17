import {
    SET_ALLDIGIMON,
    FILTER_ALLDIGIMON,
    FILTER_LEVELDIGIMON
} from '../actions/types'

const initialState = {
    digimonList: [],
    tempData: []
}

const digimonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALLDIGIMON:
            return {
                ...state,
                digimonList: action.data,
                tempData: action.data
            }
        case FILTER_ALLDIGIMON:
            return {
                ...state,
                digimonList: state.tempData.filter((val, idx) => {
                    const itemData = `${val.name.toUpperCase()}`;
                    const textData = action.data.toUpperCase();

                    return itemData.indexOf(textData) > -1;
                })
            }
        case FILTER_LEVELDIGIMON:
            let levelName = ''
            switch (action.data) {
                case 0:
                    levelName = 'all'
                    break
                case 1:
                    levelName = 'fresh'
                    break
                case 2:
                    levelName = 'training'
                    break
                case 3:
                    levelName = 'rookie'
                    break
                case 4:
                    levelName = 'champion'
                    break
                case 5:
                    levelName = 'ultimate'
                    break
                case 6:
                    levelName = 'mega'
                    break
                default:
                    levelName = ''
                    break
            }
            if (levelName === 'all') {
                return {
                    ...state,
                    digimonList: state.tempData,
                }
            }
            else {
                return {
                    ...state,
                    digimonList: state.tempData.filter((val, idx) => {
                        const itemData = `${val.level.toUpperCase()}`;
                        const textData = levelName.toUpperCase();

                        if (levelName === 'training')
                            return itemData.indexOf(textData) > -1
                        else
                            return itemData == textData
                    }),
                }
            }
        default:
            return state
    }
}

export default digimonReducer