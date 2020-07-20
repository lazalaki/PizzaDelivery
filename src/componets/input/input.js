import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Col } from 'react-grid-system';
import './input.css';

const Input = ({label, name, onChange, value, disabled = false, type = 'text', classes= '', formik = null}) => {
    const createErrorMessage = () => {
        if (formik && formik.touched && formik.touched[name] && formik.errors && formik.errors[name]) {
                return  <span>{formik.errors[name]}</span>
        }
        return <></>
    }

    return (
        <div className={`p-field p-grid`}>
            <Col>
                <label htmlFor={name} className="p-col-fixed" style={{width:'100px'}}>{label}</label>
            </Col>
            <Col className={'mg-top'}>
                <div className="p-col">
                    <Col lg={12} md={12} xs={12} sm={12}>
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
                    </Col>
                    <Col lg={12} md={12} xs={12} sm={12} className={'error'}>
                        {createErrorMessage()}
                    </Col>
                </div>
            </Col>
        </div>
    );
}

export default Input;