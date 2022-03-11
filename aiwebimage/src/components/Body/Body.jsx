import React, {useState} from 'react'
import './Body.css'
import Opening from './Opening/Opening'
import Popular_Features from './Popular_Features/Popular_Features';
import Application from './Application/Application';
import Popup from './Popup/Popup';
import Popup2 from './Popup/Popup2';


export default function Body() {
    const [listImg, setListImg] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);


    const [api, setApi] = useState({
            img: "",
            background_img: ""
    })
    const [collageImgURL, setCollageImgURL] = useState('');


    

    return (
        <div className='body-container'>  
            {showPopup ?
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}
            api={api} setApi={setApi} listImg={listImg} setListImg={setListImg}></Popup>
            :null}

            {showPopup2 ? 
            <Popup2 showPopup2={showPopup2} setShowPopup2={setShowPopup2}
            collageImgURL={collageImgURL} setCollageImgURL={setCollageImgURL}></Popup2>
            :null}
                
            <Opening></Opening>

            <Popular_Features></Popular_Features>

            <Application  showPopup={showPopup} setShowPopup={setShowPopup} 
            showPopup2={showPopup2} setShowPopup2={setShowPopup2}></Application>
        </div>
    )
}
