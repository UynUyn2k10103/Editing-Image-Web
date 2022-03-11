import React from 'react'
import './Popular_Features.css'


export default function Popular_Features() {
    return ( 
    <div className='popular_Features'>
        <div className='popular_Features-title'>
            <h2>Most Popular Features</h2>
            <p>BeFunky has an amazing collection of tools and features for photo editing, collage making,<br></br> and graphic design. Here are some favorites:</p>
        </div>
        <div className='popular_Features-listItem'>
            <div className='popular_Features-listItem__row'>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/9927a405-3121-410e-9c40-e50b1716df10_features-crop.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Crop and Resize Photos</h3>
                        <p>With our Photo Editor you can easily crop and resize your images with pixel perfect accuracy.</p>
                    </div>
                </div>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/a7a287d0-5132-46c2-8905-1bf78ba7f34b_features-photo-to-art.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Crop and Resize Photos</h3>
                        <p>Give your photos a truly unique look. Our Artsy filters will make your photos look like classic style paintings, sketches, cartoons, and more!</p>
                    </div>
                </div>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/ce7429d7-3ced-4c06-92a9-5bd62482d706_features-batch-processing.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Batch Edit Photos</h3>
                        <p>With Batch Processing, you can crop, resize, and enhance multiple photos all at the same time.</p>
                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className='popular_Features-listItem__row'>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/0d88c466-8c06-4ddc-8534-1047b109136d_features-background-remover4.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Background Remover</h3>
                        <p>Our Artificial Intelligence powered Background Remover detects the main subject in your photo and removes the background – in a single click! Easily create transparent and solid-colored backgrounds for products, portraits, and more.</p>
                    </div>
                </div>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/2f6be0fcbadea68318520365f503b538c0d73a66_features-touchup.jpg?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Retouch Portraits</h3>
                        <p>Perfect portraits and selfies, every time. With our collection of Touch Up tools, we'll have you looking your best in no time.</p>
                    </div>
                </div>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/848defdc17cc7aae6447c5e966f1dba4c6c93009_features-collagewizard.jpg?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>One-Click Collage Maker</h3>
                        <p>Let our Collage Wizard build a collage for you. With the click of a button, it'll use your photos to build a bunch of layouts for you. All you have to do is pick one.</p>
                    </div>
                </div>
            </div>

            {/* ROW 3 */}
            <div className='popular_Features-listItem__row'>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/37cf0a41-61dc-4e9a-bf51-fb0ed2637db3_features-design-templates.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Customizable Design Templates</h3>
                        <p>Graphic Design doesn't have to be hard. Select one of our pre-made design templates, and with just a bit of customizing, you'll turn your concept into a stunning design.</p>
                    </div>
                </div>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/8e6aa235-e32e-4e4a-a9fd-6e404778f9d6_features-stock-images.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Over a Million Free Stock Images</h3>
                        <p>We've partnered with Pixabay and Pexels to bring you over a million high-quality FREE stock images right in our web app.</p>
                    </div>
                </div>
                <div className='popular_Features-item'>
                    <img alt='popular' src='https://www.befunky.com/images/prismic/c4f6320f-c996-43dd-8888-c06cf17cbb71_BeFunky-graphics.png?auto=webp&format=jpg&width=400'></img>
                    <div className='popular_Features-item__content'>
                        <h3>Thousands of Vector Graphics and Icons</h3>
                        <p>You'll never be left scouring the internet for the perfect icon again. Quickly search thousands of vector graphics and icons right in our web app.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
        
    )
}
