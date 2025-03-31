import React from 'react';
import './styles.css'

const FormGroup = ({label, id, type, placeholder, onChange}) => {
    return (
        <div className="form-group flex column">
            <label htmlFor={id} >{label}</label>
            <input id={id} type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    );
};

export default FormGroup;