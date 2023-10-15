import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Languages = () =>{
  useEffect(() =>{
    Aos.init();
  }, [])

    return(
      <div className="languages" >
        <div data-aos="zoom-in" data-aos-duration="1000">
        <img src={require("../assets/languages/laravel.jpg")}  />;
        </div>
        <div data-aos="zoom-in" data-aos-duration="7000">
        <img src={require("../assets/languages/node.png")}  />;
        </div>
        <div data-aos="zoom-in" data-aos-duration="14000">
        <img src={require("../assets/languages/react.png")}  />;
        </div>
        <div data-aos="zoom-in" data-aos-duration="21000">
        <img src={require("../assets/languages/java.jpg")}  />;
        </div>
        <div data-aos="zoom-in" data-aos-duration="28000">
        <img src={require("../assets/languages/js.png")}  />;
        </div>
        <div data-aos="zoom-in" data-aos-duration="35000"> 
        <img src={require("../assets/languages/xd.jpg")}  />;
        </div>
      </div>
    )
}

export default Languages