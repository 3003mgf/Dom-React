/* eslint-disable no-fallthrough */
import React, {useRef, useEffect} from 'react';

let x = 0;
let y = 0;

const Colision = () => {

    const refArticle = useRef();
    const refDiv = useRef();

    const ballMove = (e) =>{
        let limitArticle = refArticle.current.getBoundingClientRect();
        let limitDiv = refDiv.current.getBoundingClientRect();

       switch(e.key){
        case "ArrowLeft":
            e.preventDefault();
            if(limitDiv.left > limitArticle.left) x--;
            if(limitDiv.left < limitArticle.left){
                window.open("https://www.youtube.com")
            };
            break;
        
        case "ArrowUp":
            e.preventDefault();
            if(limitDiv.top > limitArticle.top)y--;
            if(limitDiv.top < limitArticle.top){
                window.open("https://www.google.com")
            };
        
            break;
        
        case "ArrowRight":
            e.preventDefault();
            if(limitDiv.right < limitArticle.right)x++;
            if(limitDiv.right > limitArticle.right){
                window.open("https://www.twitter.com")
            };
            break;
        
        case "ArrowDown": 
            if(limitDiv.bottom < limitArticle.bottom)y++;
            if(limitDiv.bottom > limitArticle.bottom){
                window.open("https://www.gmail.com")
            }
                
            e.preventDefault();
        
            break;

        default:
            break;
       }
       refDiv.current.style.transform = `translate(${x*30}px,${y*30}px)`;
    }
    
    useEffect(() => {
        document.addEventListener("click", e =>{
            if(e.target === refArticle.current){
               document.addEventListener("keydown", ballMove);
            }else{
                document.removeEventListener("keydown", ballMove)
            }
        });
       }, []);

    

    return ( 
        <section id="section2">
            <h2>Collision</h2>
        <article className="colision-article" ref={refArticle}>
            <div className="colision-div" ref={refDiv}></div>
        </article>
        </section>
     );
}
 
export default Colision;