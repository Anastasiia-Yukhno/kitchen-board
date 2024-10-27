export type TCard = {
    id: string,
    date: string,
    day: string,
    lunch: string,

}


export type TWeekMenu = {
    string: {date: string,
    day: string,
    lunch: string,}
}[]

export type TLanguage = "pl" | "en" | "ru" | "ua"

type TWeekDates = {
weekDate: string,
        week: number
}

export type defaultStateType = {
    menuList: TMenuList,
    // weekMenu: TMenuList,
    language: TLanguage,
    theme: TTheme,
    week: number,
    weekDates: TWeekDates[]
}

export type TTheme = "dark" | "light" 

export type TMenuList = {
    week: number,
    date: string,
    day: string,
    lunch: string
}[] 