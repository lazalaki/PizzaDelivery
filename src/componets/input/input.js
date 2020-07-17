import React from 'react';
import { InputText } from 'primereact/inputtext';

const Input = ({label, name, onChange, value, disabled = false, type = 'text', classes= '', formik = null}) => {
    console.log(formik)
    const createErrorMessage = () => {
        if (formik && formik.touched && formik.touched[name] && formik.errors && formik.errors[name]) {
                return  <span>{formik.errors[name]}</span>
        }
        return <></>
    }

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
                    onBlur={formik.handleBlur}
                />
                {createErrorMessage()}
            </div>
        </div>
    );
}

export default Input;