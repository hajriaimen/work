import React from 'react';

let Home=()=>{
    return (
        <div style={{margin:'0px', padding:'0px',  }} className='container'>
            <iframe 
                
                title="Live streaming"
                width={window.screen.width-20} 
                height={window.screen.height*0.5} 
                src="http://www.pervoice.com/it/" 
                frameborder="0" 
                allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscree 
                >
                    
            </iframe>
        </div>
    )
}

export default Home;