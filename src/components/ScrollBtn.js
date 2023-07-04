import React from 'react';

const ScrollBtn = () => {

   const handleClick = () =>{
    window.scrollTo(0, 0);
   }


    return ( 
        <button className="scrollBtn" onClick={handleClick}>
        <span className="material-symbols-outlined">
           expand_less
        </span>
        </button>
     );
}
 
export default ScrollBtn;