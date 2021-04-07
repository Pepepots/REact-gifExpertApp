import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    // console.log()

    if(title === '' | title === ' '){
        title = 'Sin titulo'
    }

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}/>
            <p> {title} </p>
        </div>
    )
}
