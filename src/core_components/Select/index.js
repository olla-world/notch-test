import React from 'react';

import './style.css'

const Select = (props) => {
    const {
        classNameMod ='', 
        handleChange, 
        selected=null,
        options=[] 
    } = props

    return <select 
        value={selected}
        onChange={e=>handleChange(e)} 
        className={`select select--${classNameMod}`}
    >
        {options.map(option=>
            <option 
                key={`option-${option.value}`} 
                className="select-option"
                value={option.value}
            >
                {option.name}
            </option>
        )}
    </select>
}

export default Select