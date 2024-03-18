import React from 'react'
import './PageBanner.css'
import { Link } from 'react-router-dom'


function PageBanner({ leftText, LeftIcon, rightText, RightIcon, slug, }) {
    return (
        <div className='pagebanner'>
            <div className="pagebanner__title">
                {LeftIcon && <LeftIcon />}
                {leftText}
                <Link to = {slug} className="pagebanner__link">
                    {RightIcon && <RightIcon />}
                    {rightText}
                </Link>
            </div>
        </div>
    )
}

export default PageBanner