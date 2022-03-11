import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-nav'>
                <a href='https://www.befunky.com/' className='site-nav_logo'>
                    <img src='https://www.befunky.com/images/site/logo-darker.svg' alt='befunky'></img>
                </a>
                <div className='site-nav_listItems'>
                    <div className='site-nav_item' href='https://www.befunky.com/'>Create</div>
                    <div className='site-nav_item' href='https://www.befunky.com/'>Learn</div>
                    <div className='site-nav_item' href='https://www.befunky.com/'>Support</div>
                </div>
                <div className='site-nav_account'>
                    <div className='site-nav_item' href='https://www.befunky.com/'>Sign In</div>
                    <div className='start_btn'>
                        <span>Get Started</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
