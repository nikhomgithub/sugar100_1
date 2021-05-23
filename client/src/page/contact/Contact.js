import React from 'react';
import myphoto from '../../images/mysquarephoto.png'
import line from '../../images/line.jpg'
import whatapp from '../../images/whatapp.jpg'
import {MainContext} from '../../context/MainContext';

import './Contact.css'

function Contact() {

const {basicData,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)

const default1="This prototype application is developed from MERN stack which including MongoDb, Express, React & Node. If you are interesed, please contact me. I look forward to work with you to develop application as your demand"

return (
<div className="flex-center-center h-100 w-100 contactGg">

    <div className="h-80 w-80 bd-gray"
         style={{boxShadow: "2px 2px 50px darkgreen",
                 padding:"2rem 2rem 0 2rem",
                 backgroundColor:"rgba(200,200,200,0.8)",
                 borderRadius:"2rem"
                }}
    >
        <div className="flex-center-center h-30 w-100">
            <img 
                style={{
                    borderRadius:"50%",
                    height:"100%",
                    objectFit:"cover"
                }}
                src={myphoto} />
        </div>
        <div className="flex-center-center h-25 w-100">
            <h4 style={{lineHeight:"1.5"}}>
                &emsp;&emsp;
                {basicData?basicData.about:default1}
            </h4>
        </div>
        <div className="flex-center-center h-15 w-100">
            <h4 style={{textAlign:"center"}}>
            {basicData?basicData.contact:null}
            </h4>
        </div>
        <div className="flex-center-center h-25 w-100">
            
                <img 
                    style={{
                    borderRadius:"5%",
                    height:"100%",
                    objectFit:"cover",
                    margin:"0 2rem"
                    }}
                    src={line} />
                <img 
                    style={{
                        borderRadius:"5%",
                        height:"100%",
                        objectFit:"cover",
                        margin:"0 2rem"

                    }}
                src={whatapp} />  
        </div>
    </div>
</div>
)
}

export default Contact;