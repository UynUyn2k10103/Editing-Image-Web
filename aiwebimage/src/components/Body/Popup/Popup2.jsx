import React, { useState } from 'react'
import './Popup.css'
import axios from 'axios';


export default function Popup2({showPopup2,setShowPopup2, collageImgURL, setCollageImgURL}) {
    const [files, setFiles] = useState();
    const [showCollageImg, setShowCollageImg] = useState(false);


    const handleCollageImg= (e) => {
        // var files = e.target.files;
        setFiles(e.target.files);
        console.log(e.target.files);
    }


    const handleCreateCollageImg = () => {
        let count = 0;
        let formData = new FormData();
        console.log(files);   

        for (let i=0; i<files.length; i++) {
            if (i === 9) {
                break;
            }
            let fileName = 'img' + String(count);
            count++;
            formData.append(fileName, files[i]);
        }
        if (count < 8) {
            for (let i = count; i <= 8; i++) {
                let fileName = 'img' + String(count);
                count++;
                formData.append(fileName, files[0]);
            }
        }

        // for(var pair of formData.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]); 
        // }

        axios.post('http://127.0.0.1:8900/api/predict/',formData)
            .then(response => {
                console.log('Post API thanh cong', response)
                let tmpURL = "http://127.0.0.1:8900" + response.data.predict;
                setCollageImgURL(tmpURL);
                setShowCollageImg(true);
            })
            .catch(error => console.log('Post API xit', error))
    }


    return (
        <div className='popup-background'>
            <div className='popup-wrapper'>
                <div className='popup-exit_btn' onClick={() => setShowPopup2(false)}>
                    <i class="fas fa-times"></i>
                </div>
                <div className='edit_photo-wrapper'>
                    <h2>What Would You Like to Do Today?</h2>
                    <div className='edit_photo-image'>
                        <div className='input_img-wrapper'
                        style={{width: "500px", height: "auto"}}>
                            <img alt='person' src='https://www.befunky.com/images/illustrations/editor.svg'
                            style={{width: "500px", height: "auto"}}></img>
                            <div className='edit_img-content'>
                                <p>Photo effects and tools for enhancing your photos</p>
                                <label className='input_img-btn' htmlFor='collageImgs'>
                                    <input type='file' multiple accept='image/*' id='collageImgs'
                                    onChange={handleCollageImg}></input>
                                    <span>Person image</span>
                                </label>
                            </div>
                        </div>

                        <div className='input_img-wrapper'
                        style={{width: "500px", height: "auto"}}>
                            {showCollageImg ? 
                            <img alt='collage' src={collageImgURL}
                            style={{width: "500px", height: "auto"}}></img>
                            :<img alt='collage' src='https://www.befunky.com/images/illustrations/template.svg'
                            style={{width: "500px", height: "auto"}}></img>
                            }
                            <div className='edit_img-content'>
                                <p>Templates for creating banners, flyers, cards, & more</p>
                                <div className='input_img-btn' onClick={handleCreateCollageImg}>
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
