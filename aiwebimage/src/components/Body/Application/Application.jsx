import React from 'react'
import './Application.css'

export default function Application({showPopup, setShowPopup,showPopup2, setShowPopup2}) {
    return (
        <div className='application-wrapper' id='Application'>
            <div className='application-item__row'>
                <img alt='application' src='https://www.befunky.com/images/prismic/b6942555-35a8-42b5-9b05-88565ce5698e_landing-page-homepage-img1.png?auto=webp&format=jpg&width=600'></img>
                <div className='item_content'>
                    <h2>Photo Editor</h2>
                    <p>
                        <a href="https://www.befunky.com/features/photo-editor/">Photo Editor</a> To 
                        put it simply, BeFunky makes photo editing easy. With our world famous , you can turn photos you like into photos you love! From essential editing tools such as 
                        <a href="https://www.befunky.com/features/crop-photo/">crop</a>, 
                        <a href="https://www.befunky.com/features/resize-image/">resize</a>, 
                        and exposure to our more unique effects like 
                        <a href="https://www.befunky.com/features/photo-to-cartoon/">Cartoonizer</a>, 
                        <a href="https://www.befunky.com/features/digital-art/">Digital Art</a>, 
                        and <a href="https://www.befunky.com/features/photo-enhancer/">Enhance DLX</a>, 
                        it's beyond easy to create great looking photos. Add a little extra flair to your image with hundreds of customizable vector icons and graphic overlays. 
                        If picture quotes are your thing, BeFunky's Photo Editor has hundreds of free fonts for you to choose from. Finally, a photo editor that's powerful, fun, AND easy to use!
                    </p>
                    <div className='application_btn' onClick={() => setShowPopup(!showPopup)}>
                        <span>Edit a Photo</span>
                    </div>
                </div>
            </div>

            {/* APP 2 */}
            <div className='application-item__row'>
                <div className='item_content'>
                    <h2>Collage Maker</h2>
                    <p>
                    Tell a story, share an adventure, or create anything else you want, 
                    our <a href="https://www.befunky.com/features/collage-maker/">Collage Maker</a> is 
                    here for you. BeFunky's Collage Maker empowers you to easily create breathtaking online photo collages. Simply upload your photos and let 
                    our <a href="https://www.befunky.com/features/collage-wizard/">Collage Wizard</a> automatically 
                    create a stunning collage for you, or choose from our collection of fully customizable layouts. We even have layouts designed especially for Pinterest, Facebook, Twitter, and Instagram, so your posts are guaranteed to stand out from the crowd.
                    </p>
                    <div className='application_btn'
                    onClick={() => setShowPopup2(!showPopup2)}>
                        <span>Create a Collage</span>
                    </div>
                </div>
                <img alt='application' src='https://www.befunky.com/images/prismic/b1e51312-ae85-4491-b772-9092c44e3405_landing-page-homepage-img2.png?auto=webp&format=jpg&width=600&bg-color=FAFAFA'></img>
            </div>

            {/* APP 3 */}
            <div className='application-item__row'>
                <img alt='application' src='https://www.befunky.com/images/prismic/23604e36-474b-4985-bf77-8468bdc1867e_landing-page-homepage-img3.png?auto=webp&format=jpg&width=600'></img>
                <div className='item_content'>
                    <h2>Graphic Designer</h2>
                    <p>
                    Don't know Photoshop? Now you don't need to. 
                    Our <a href="https://www.befunky.com/features/graphic-designer/">Graphic Designer</a> empowers 
                    you to design like never before, helping you create custom graphics with ease. Say ‘Goodbye' to complicated, expensive software and create beautiful online graphic design projects with drag-and-drop simplicity. 
                    Take advantage of a huge selection of professionally designed templates, or if you feel like truly embracing your creativity, design a project from scratch with our easy-to-use graphic design tools.
                    </p>
                    <div className='application_btn'>
                        <span>Create a Design</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
