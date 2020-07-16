import React, { useContext } from 'react';
import { useTranslation} from 'react-i18next';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import Input from '../../../componets/input/input';
import { emailPlaceholder, passwordPlaceholder } from '../onboardingTranslation';
import { loginRequest } from '../../../services/auth/auth';
import { Button } from 'primereact/button';
import { dashboardRoute } from '../../../shared/routes/routes';
import { GlobalStore} from '../../../stores/global-store/global-store';
import { loginFormValidation } from './loginFromValidation';

const Login = ({history}) => {
    const { t: translate } = useTranslation();

    // const globalStore = useContext(Glob)
    const {setUser} = useContext(GlobalStore);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginFormValidation()
    })

    const onSubmitHandler = async () => {
        try {
            const {data} = await loginRequest(formik.values)
        
            setUser(data.user)

            history.push(dashboardRoute())
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div>
            <Input
                name={'email'}
                label={translate(emailPlaceholder)}
                onChange={formik.handleChange}
                value={formik.values.email}
                formik={formik}
            />
            <Input 
                type={'password'} 
                name={"password"} 
                onChange={formik.handleChange} 
                value={formik.values.password}
                label={translate(passwordPlaceholder)}
                formik={formik}
            />
            <Button label="Submit" disabled={!(formik.isValid && formik.dirty)} className="p-button-rounded" onClick={onSubmitHandler} />   
        </div>
    )
}


export default withRouter(Login);