
import getMenuList from '../mock/MenuList';
import { defaultStateType, TLanguage, TTheme } from '../types'

export const language: TLanguage = "pl"
export const theme: TTheme = "dark"

const getWeek = (weekNumber: number) => {
    let weekDate = getMenuList(language).filter((week) => week.week === weekNumber);
    return `${weekDate[0].date}-${weekDate[weekDate.length - 1].date}`;
};
type TWeekDates = {
    weekDate: string,
        week: number
}[]
  
const getWeekDates = () => {
    let numberList: number[] = [];
    getMenuList(language).forEach((item) => {
        
        if (!numberList.includes(item.week) ) {
            
            numberList.push(item.week);
        }
    });

    
    let weekDates: TWeekDates = []
    
    numberList.map((weekNumber) => weekDates.push({
        weekDate: getWeek(weekNumber),
        week: weekNumber
    })
    )

    return weekDates

}





export const defaultState: defaultStateType = {
    menuList: getMenuList(language),
    // weekMenu: getMenuList(language).filter((item) => item.week === 1),
    week: 1,
    language: language,
    theme: "dark",
    weekDates: getWeekDates()
}