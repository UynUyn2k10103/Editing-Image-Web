import React, {useState} from 'react'
import axios from 'axios';
import './Popup.css'

export default function Popup({showPopup, setShowPopup, api, setApi, listImg, setListImg}) {
    const [backImgURL, setBackImgURL] = useState('');
    const [perImgURL, setPerImgURL] = useState('');
    const [predictImg, setPredictImg] = useState('');

    const [showBackImg, setShowBackImg] = useState(false);
    const [showPerImg, setShowPerImg] = useState(false);
    const [showPredictImg, setShowPredictImg] = useState(false);


    const handlePostAPI = () => {
        axios.post('http://127.0.0.1:8080/api/predict/',api)
            .then(response => {
                console.log('Post API thanh cong', response)
                let tmpURL = "http://127.0.0.1:8080" + response.data.predict;
                setPredictImg(tmpURL);
                setShowPredictImg(true);
                console.log(predictImg, 'alo123'); 
            })
            .catch(error => console.log('Post API xit', error))
        
    }



    const handleUpLoadBackImg = async (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setBackImgURL(reader.result);
                setShowBackImg(true);
            }
        }
        reader.readAsDataURL(e.target.files[0]); 
        
        // set API
        const file = e.target.files[0];
        let base64 = await convertBase64(file);
        base64 = base64.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        // console.log(base64);
        api.background_img = base64;
        setApi(api);
        // console.log(api);
    }

    const handleUpLoadPerImg = async (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPerImgURL(reader.result);
                setShowPerImg(true);
            }
        }
        reader.readAsDataURL(e.target.files[0]);  
        
        // set API
        const file = e.target.files[0];
        let base64 = await convertBase64(file);
        base64 = base64.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        // console.log(base64);
        api.img = base64;
        setApi(api);
        // console.log(api);
        
    }


    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })  
    }
    

    return (
        <div className='popup-background'>
            <div className='popup-wrapper'>
                <div className='popup-exit_btn' onClick={() => setShowPopup(false)}>
                    <i class="fas fa-times"></i>
                </div>
                <div className='edit_photo-wrapper'>
                    <h2>What Would You Like to Do Today?</h2>
                    <div className='edit_photo-image'>
                        <div className='input_img-wrapper'>
                            {showPerImg ? 
                            <img alt='person' src={perImgURL}></img>
                            :<img alt='person' src='https://www.befunky.com/images/illustrations/editor.svg'></img>
                            }
                            <div className='edit_img-content'>
                                <p>Photo effects and tools for enhancing your photos</p>
                                <label className='input_img-btn' htmlFor='input-personImg'>
                                    <input type='file' accept='image/*' id='input-personImg'
                                    onChange={handleUpLoadPerImg}></input>
                                    <span>Person image</span>
                                </label>
                            </div>
                        </div>
                        <div className='input_img-wrapper'>
                            {showBackImg ? 
                            <img alt='background' src={backImgURL}></img>
                            :<img alt='background' src='https://www.befunky.com/images/illustrations/collage.svg'></img>
                            }
                            <div className='edit_img-content'>
                                <p>Combine multiple photos into one with a grid layout</p>
                                <label className='input_img-btn' htmlFor='input-backgroundImg'>
                                    <input type='file' accept='image/*' id='input-backgroundImg'
                                    onChange={handleUpLoadBackImg}></input>
                                    <span>Background image</span>
                                </label>
                            </div>
                        </div>
                        <div className='input_img-wrapper'>
                            {showPredictImg ? 
                            <img alt='predict' src={predictImg}></img>
                            :<img alt='predict' src='https://www.befunky.com/images/illustrations/template.svg'></img>
                            }
                            
                            <div className='edit_img-content'>
                                <p>Templates for creating banners, flyers, cards, & more</p>
                                <div className='input_img-btn' onClick={handlePostAPI}>
                                    <span>Create image</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div>
        </div>
    )
}
