import React from 'react';
import { useTranslation} from 'react-i18next';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import Input from '../../../componets/input/input';
import { emailPlaceholder, passwordPlaceholder } from '../onboardingTranslation';
import { loginRequest } from '../../../services/auth/auth';
import { Button } from 'primereact/button';
import { dashboardRoute } from '../../../shared/routes/routes';


const Login = ({history}) => {
    const { t: translate } = useTranslation();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }
    })

    const onSubmitHandler = async () => {
        try {
            await loginRequest(formik.values)
            history.push(dashboardRoute())
        } catch(error) {
            console.log(error)
        }
    }

    

    console.log('Form values', formik.values)
    return(
        <div>
            <Input
                name={'email'}
                label={translate(emailPlaceholder)}
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <Input 
                type={'password'} 
                name={"password"} 
                onChange={formik.handleChange} 
                value={formik.values.password}
                label={translate(passwordPlaceholder)} 
            />
            <Button label="Submit" className="p-button-rounded" onClick={onSubmitHandler} />   
        </div>
    )
}


export default withRouter(Login);