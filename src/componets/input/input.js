import React from 'react';
import { InputText } from 'primereact/inputtext';

const Input = ({label, name, onChange, value, disabled = false, type = 'text', classes= ''}) => {

    return (
        <div className="p-field p-grid">
        <label htmlFor={name} className="p-col-fixed" style={{width:'100px'}}>{label}</label>
            <div className="p-col">
                <InputText 
                    id={name}
                    type={type} 
                    name={name} 
                    onChange={onChange} 
                    value={value}
                    disabled={disabled}
                    className={classes}
                />
            </div>
        </div>
    );
}

export default Input;