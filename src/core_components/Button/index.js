import React from 'react';

import './style.css'

const Button = (props) => {
    const {classNameMod ='', handleClick} = props

    return <div
        onClick={()=>handleClick()} 
        className={`button button--${classNameMod}`}
    >
        {props.children}
    </div>
}

export default Button