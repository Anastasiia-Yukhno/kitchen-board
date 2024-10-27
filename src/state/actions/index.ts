
import menuList from '../../mock/MenuList'
import { TLanguage } from '../../types'
import { CHANGE_LANGUAGE, CHANGE_LANGUAGE_MENU, CHANGE_WEEK } from '../actionsTypes'
import { store } from '../store'

const language = store.getState().language

// export const  = (week: number) => 
//     ({
//         type: GET_WEEK_MENU,
//         value: menuList(language).filter((item) => item.week === week)
//     })


export const changeWeek = (week: number) => 
    ({
        type: CHANGE_WEEK,
    value: { week: week, weekMenu: menuList(language).filter((item) => item.week === week)}
    })

export const changeLanguage = (language: TLanguage) => 
({
    type: CHANGE_LANGUAGE,
    value: language
})

export const changeLanguageMenu = (language: TLanguage) => 
({
    type: CHANGE_LANGUAGE_MENU,
    value: menuList(language)
})