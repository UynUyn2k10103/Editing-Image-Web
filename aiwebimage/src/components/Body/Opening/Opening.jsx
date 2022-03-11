import React, { useEffect, useState } from 'react'
import './Opening.css'

export default function Opening() {
    const slideData = [
        'https://www.befunky.com/images/prismic/257696e2-c8e3-4fe6-a676-094bd3422c07_hero-photo-editor.jpg?auto=webp&format=jpg&width=900',
        'https://www.befunky.com/images/prismic/ef615f7d-4a27-49b8-a561-fe2ead9b2b2e_hero-designer-templates.jpg?auto=webp&format=jpg&width=900',
        'https://www.befunky.com/images/prismic/767bc6a5-6531-4854-ac38-376c4f164394_hero-collage.jpg?auto=webp&format=jpg&width=900',
        'https://www.befunky.com/images/prismic/d97d2731-f0a5-43b2-84e4-d32a7a74e125_hero-photo-editor2.jpg?auto=webp&format=jpg&width=900'  
    ];

    const [currentImg, setCurrentImg] = useState(0);
    const length = slideData.length;

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearInterval(slideInterval);
        }
    })

    const nextSlide = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    };
    
    
    if (!Array.isArray(slideData) || slideData.length <= 0) {
        return null;
    }


    return (
        <div>
            <div className='body-opening'>
                <div className='body-opening__title'>
                    <h1>Photo Editing and Graphic Design Made for Everyone</h1>
                    <p>BeFunky's all-in-one online Creative Platform has everything you need to easily edit photos, create graphic designs, and make photo collages.</p>
                    <div className='body-opening__btn-started'>
                        <span>Get Started</span>
                    </div>
                </div>
                <div className='slide-show'>
                    {slideData.map((slide, index) => {
                        return (
                            <div className={index === currentImg ? 'slide active' : 'slide'}
                            key={index}>
                                {index === currentImg && (
                                    <img src={slide} alt='slide show' className='img_slider'/>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
