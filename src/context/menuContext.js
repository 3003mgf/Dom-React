import { createContext } from "react";
import React, {useState, useRef} from 'react';


const MenuContext = createContext();

const MenuProvider = ({children}) =>{
    let refSections = useRef();
    const [panelState, setPanelState] = useState(false);
    
    const data = {panelState, setPanelState, refSections};

    return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
}


export {MenuContext};
export {MenuProvider};