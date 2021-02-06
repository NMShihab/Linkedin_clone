import React from 'react'
import RecordIcon from '@material-ui/icons/FiberManualRecord'
import '../css/NewsArticle.css'

function NewsArticle({heading, subtitle}) {

    
    return (
        <div className='articles'> 
            <div className='articles__left'>
                <RecordIcon />

            </div>
            <div className='articles__right'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
            
        </div>
    )
}

export default NewsArticle
