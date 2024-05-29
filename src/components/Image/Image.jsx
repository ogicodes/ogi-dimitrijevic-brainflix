import React from 'react'
import '../Image/Image.scss'

export default function Image(props) {
    return(
        <div class='avatar'>
            <img class='avatar__img' src={props.src} alt={props.alt} ></img>
        </div>
    )
}