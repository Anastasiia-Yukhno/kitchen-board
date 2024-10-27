import {  TLanguage } from "../../types";

import { menuListPL } from "./MenuListPL";
import { menuListEN } from "./MenuListEN";
import { menuListRU } from "./MenuListRU";
import { menuListUA } from "./MenuListUA";


const getMenuList = (language: TLanguage) => {
     
    switch (language) {
        case "pl":
            return menuListPL;
        
        case "en":
            return menuListEN;
        
        case "ua":
            return menuListUA;
        
        case "ru":
            return menuListRU;
    }
}


export default  getMenuList