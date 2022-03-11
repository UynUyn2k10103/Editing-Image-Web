import React from 'react'
import './Footer.css'


export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer_wrapper'>
                <div className='footer_top'>
                    <div className='footer_top-icons'>
                        <img alt='logo' src='https://www.befunky.com/images/site/logo-darker.svg'></img>
                        <div className='logo_brand'>
                            <div className='logo_brand-wrapper'><i class="fab fa-pinterest-p"></i></div>
                            <div className='logo_brand-wrapper'><i class="fab fa-twitter"></i></div>
                            <div className='logo_brand-wrapper'><i class="fab fa-facebook-f"></i></div>
                            <div className='logo_brand-wrapper'><i class="fab fa-instagram"></i></div>
                            <div className='logo_brand-wrapper'><i class="fab fa-linkedin-in"></i></div>
                            <div className='logo_brand-wrapper'><i class="fab fa-youtube"></i></div>
                        </div>
                    </div>
                    <div className='footer_top-item'>
                        <h6>Products</h6>
                        <span>Photo Editor</span>
                        <span>Collage Maker</span>
                        <span>Graphic Designer</span>
                        <span>Pricing</span>
                        <span>BeFunky Mobile</span>
                        <span>Vision</span>
                    </div>
                    <div className='footer_top-item'>
                        <h6>Features</h6>
                        <span>Photo Effects</span>
                        <span>Touch Up</span>
                        <span>Photo to Art</span>
                        <span>Pricing</span>
                        <span>Background Remover</span>
                        <span>Essential Features</span>
                        <span>More</span>
                    </div>
                    <div className='footer_top-item'>
                        <h6>Resources</h6>
                        <span>Getting Started</span>
                        <span>User Guides</span>
                        <span>FAQ</span>
                        <span>Tutorials</span>
                        <span>What's New</span>
                        <span>Case Studies</span>
                        <span>Explore</span>
                    </div>
                    <div className='footer_top-item'>
                        <h6>Company</h6>
                        <span>About</span>
                        <span>Values</span>
                        <span>Press</span>
                        <span>Careers</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className='footer_bot'>
                    <div className='language'>
                        <span>Language: <b>English</b> <i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div className='footer_bot-terms'>
                        <p class="footer_bot-terms-text">© 2021 BeFunky Inc. <a href="https://www.befunky.com/terms/" data-lang="terms">Terms</a> | <a href="https://www.befunky.com/privacy/" data-lang="privacy_policy">Privacy Policy</a> | <a href="https://www.befunky.com/accessibility/" data-lang="accessibility">Accessibility</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
