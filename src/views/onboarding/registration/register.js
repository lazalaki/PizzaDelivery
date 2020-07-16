import React from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../../componets/input/input'
import { Button } from 'primereact/button'
import { firstNamePlaceholder, lastNamePlaceholder, emailPlaceholder, passwordPlaceholder } from '../onboardingTranslation';
import { registerRequest } from '../../../services/auth/auth';
import { loginRoute } from '../../../shared/routes/routes';


const Register = ({history}) => {

    const { t: translate} = useTranslation()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

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
        <div>
            <Input 
                label={translate(firstNamePlaceholder)} 
                name={'firstName'} 
                onChange={formik.handleChange} 
                value={formik.values.firstName} 
            />

            <Input 
                label={translate(lastNamePlaceholder)}
                name={'lastName'}
                onChange={formik.handleChange}
                value={formik.values.lastName} 
            />

            <Input 
                label={translate(emailPlaceholder)}
                name={'email'}
                type={'email'}
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <Input 
                label={translate(passwordPlaceholder)}
                name={'password'}
                type={'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <Button label="Submit" className="p-button-rounded" onClick={onSubmitHandler} />
        </div>
    )
}


export default withRouter(Register);