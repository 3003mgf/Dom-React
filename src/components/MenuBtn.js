import React, {useContext, useState, useEffect} from 'react';
import { MenuContext } from '../context/menuContext';



const MenuBtn = () => {
   
    const [btn, setBtn] = useState("menu");
    const {panelState, setPanelState} = useContext(MenuContext);
   

    useEffect(() => {
        if(panelState)setBtn("close");
        if(!panelState)setBtn("menu");
    }, [panelState]);

    const handleClick = (e) =>{
       if(e.target.classList.contains("hamburguer") || e.target.classList.contains("menuBtn")){
           if(btn === "menu"){
            setPanelState(true);
           }else{
            setPanelState(false);
           }
       }
    };

    return ( 
         <div>
            <button className="hamburguer" onClick={handleClick}>
            <span className="material-symbols-outlined menuBtn" onClick={handleClick}>
                {btn}
            </span>
            </button>
         </div>
     );
}
 
export default MenuBtn;