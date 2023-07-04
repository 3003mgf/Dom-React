import React from 'react';

const Modal = ({children, setIsOpen}) => {
    return ( 
        <article className="articleModal">
            <div className="divModal">
                <button onClick={()=> setIsOpen(false)} className="buttonModal">X</button>
                {children}
            </div>
        </article>
     );
}
 
export default Modal;