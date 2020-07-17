import React from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../../componets/input/input'
import { Button } from 'primereact/button'
import { firstNamePlaceholder, lastNamePlaceholder, emailPlaceholder, passwordPlaceholder } from '../onboardingTranslation';
import { registerRequest } from '../../../services/auth/auth';
import { loginRoute } from '../../../shared/routes/routes';
import { registerFormValidation } from './registerFormValidation'
import './register.css'


const Register = ({history}) => {

    const { t: translate} = useTranslation()

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
            console.log(formik.values)
            await registerRequest(formik.values)
            history.push(loginRoute())
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div className={'container'}>
            <div className={'form'}>
                <Input 
                    label={translate(firstNamePlaceholder)} 
                    name={'firstName'} 
                    onChange={formik.handleChange} 
                    value={formik.values.firstName}
                    formik={formik}
                />

                <Input 
                    label={translate(lastNamePlaceholder)}
                    name={'lastName'}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    formik={formik} 
                />

                <Input 
                    label={translate(emailPlaceholder)}
                    name={'email'}
                    type={'email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    formik={formik}
                />

                <Input 
                    label={translate(passwordPlaceholder)}
                    name={'password'}
                    type={'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    formik={formik}
                />

                <Button label="Submit" disabled={!(formik.isValid && formik.dirty)} className="p-button-rounded" onClick={onSubmitHandler} />
                <a href={loginRoute()}>Go to login?</a>
            </div>
            
        </div>
    )
}


export default withRouter(Register);