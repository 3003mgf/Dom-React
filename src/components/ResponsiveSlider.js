import React, {useRef} from 'react';

const ResponsiveSlider = () => {

    let refPrev = useRef();
    let refNext = useRef();
    let refSliders = useRef();
    let i = 0;
    

    const handlePrev = () =>{
        refSliders.current.querySelectorAll(".eachSlider")[i].classList.remove("active");
        i--;

        if(i < 0){
            i = refSliders.current.querySelectorAll(".eachSlider").length -1;
        };

        refSliders.current.querySelectorAll(".eachSlider")[i].classList.add("active");

    }

    const handleNext = () =>{
        refSliders.current.querySelectorAll(".eachSlider")[i].classList.remove("active");
        i++;

        if(i > refSliders.current.querySelectorAll(".eachSlider").length -1){
            i = 0;
        }

        refSliders.current.querySelectorAll(".eachSlider")[i].classList.add("active");
    }

    return ( 
        <section id="section10">
            <h2>Responsive Slider</h2>
          <div className="sliderContainer">

            <div className="sliders" ref={refSliders}>

                   <div className="eachSlider active">    
                   <img src="https://buenosamigosradio.es/wp-content/uploads/2022/02/Chanel-SloMo-400x400-1.jpg" alt="Chanel1"/>
                   </div>

                   <div className="eachSlider">
                   <img src="https://pbs.twimg.com/profile_images/1394049626895003649/Mf1Ejs05_400x400.jpg" alt="Chanel3"/>
                   </div>

                   <div className="eachSlider">
                   <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/moda/tendencias/karl-lagerfeld-chanel-mejores-momentos-moda/3071540-1-esl-ES/chanel-segun-karl-lagerfeld-en-20-momentos-inolvidables.jpg" alt="ChanelBoy"/>
                   </div>

            </div>

            <div className="sliderButtons">
                <button ref={refPrev} className="buttons" onClick={handlePrev}>&lsaquo;</button>
                <button ref={refNext} className="buttons" onClick={handleNext}>&rsaquo;</button>
            </div>
          
          </div>
        </section>
     );
}
 
export default ResponsiveSlider;