import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../../componets/input/input'
import { Button } from 'primereact/button'
import { firstNamePlaceholder, lastNamePlaceholder, emailPlaceholder, passwordPlaceholder } from '../onboardingTranslation';
import { registerRequest } from '../../../services/api/auth/auth-service';
import { loginRoute } from '../../../shared/routes/routes';
import { registerFormValidation } from './registerFormValidation'
import './register.css'
import { Col, Row } from 'react-grid-system';
import { GlobalStore } from '../../../stores/global-store/global-store';


const Register = ({history}) => {

    const { t: translate} = useTranslation()

    const {showSuccess, showError} = useContext(GlobalStore)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: registerFormValidation()

    })

    
    const onSubmitHandler = async () => {
        try {
            await registerRequest(formik.values)
            showSuccess('You have successfully register')
            history.push(loginRoute())
        } catch(error) {
            showError(error.message)
        }
    }

    return(
        <div className={'container'}>
            <div className={'form'}>
                <Row className={'raw-height'}>
                    <Col>
                        <Input 
                            label={translate(firstNamePlaceholder)} 
                            name={'firstName'} 
                            onChange={formik.handleChange} 
                            value={formik.values.firstName}
                            formik={formik}
                        />
                    </Col>
                </Row>

                <Row className={'raw-height'}>
                    <Col>
                        <Input 
                            label={translate(lastNamePlaceholder)}
                            name={'lastName'}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            formik={formik} 
                        />
                    </Col>
                </Row>

                <Row className={'raw-height'}>
                    <Col>
                        <Input 
                            label={translate(emailPlaceholder)}
                            name={'email'}
                            type={'email'}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            formik={formik}
                        />
                    </Col>
                </Row>

                <Row className={'raw-height'}>
                    <Col>
                        <Input 
                            label={translate(passwordPlaceholder)}
                            name={'password'}
                            type={'password'}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            formik={formik}
                        />
                    </Col>
                </Row>

                <Row className={'raw-height'}>
                    <Col lg={12} md={12} xs={12} sm={12}>
                        <Button label="Submit" disabled={!(formik.isValid && formik.dirty)} className="p-button-rounded" onClick={onSubmitHandler} />
                    </Col>
                    <Col lg={12} md={12} xs={12} sm={12}>
                        <a href={loginRoute()}>Go to login?</a>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}


export default withRouter(Register);