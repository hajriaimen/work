import React from 'react';
//import { Icon } from 'design-react-kit';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';



function Streaming() {
    return (
        <div className="col-lg-8 col-md-10 col-sm-12">
            <iframe 
                scrolling="no"
                title="Live streaming"
                width={window.screen.width-20} 
                height={window.screen.height*0.5} 
                src="https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1" 
                frameborder="0" 
                allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscree
                >
            </iframe>
        </div>
    );
}
export default Streaming;

