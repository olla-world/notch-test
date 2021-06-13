import React from 'react';

import './style.css'

const Section = (props) => {
    const {classNameMod =''} = props

    return <div className={`section section--${classNameMod}`}>
        <div className={`wrap wrap--${classNameMod}`}>
            {props.children}
        </div>
    </div>
}

export default Section