
import { defaultState } from '..'

import { CHANGE_LANGUAGE, CHANGE_LANGUAGE_MENU, CHANGE_WEEK } from '../actionsTypes'


export const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        
        // case GET_WEEK_MENU:
        //     return { ...state, weekMenu: action.value }
        
        case CHANGE_WEEK:
            return {
                ...state,
                week: action.value.week,
                weekMenu: action.value.weekMenu
            }
        case CHANGE_LANGUAGE:
            console.log('state', state)
            return { ...state, language: action.value }
        
        case CHANGE_LANGUAGE_MENU: 
         return { ...state, menuList: action.value }
        

        default:
            return state
    }
}

