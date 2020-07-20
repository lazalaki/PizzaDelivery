import React, { useContext } from 'react';
import { useTranslation} from 'react-i18next';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import Input from '../../../componets/input/input';
import { emailPlaceholder, passwordPlaceholder } from '../onboardingTranslation';
import { loginRequest } from '../../../services/api/auth/auth-service';
import { Button } from 'primereact/button';
import { dashboardRoute, registerRoute } from '../../../shared/routes/routes';
import { GlobalStore} from '../../../stores/global-store/global-store';
import { loginFormValidation } from './loginFromValidation';

import './login.css';
import { Row, Col } from 'react-grid-system';

const Login = ({history}) => {
    const { t: translate } = useTranslation();

    const {setUser, showSuccess, showError} = useContext(GlobalStore);
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
            showSuccess('You have successfully logged in')
            history.push(dashboardRoute())
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
                            name={'email'}
                            label={translate(emailPlaceholder)}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            formik={formik}
                            className={'input'}
                        />
                    </Col>
                </Row>
                <Row className={'raw-height'}>
                    <Col>
                        <Input 
                            type={'password'} 
                            name={"password"} 
                            onChange={formik.handleChange} 
                            value={formik.values.password}
                            label={translate(passwordPlaceholder)}
                            formik={formik}
                            className={'input'}
                        />
                    </Col>
                </Row>
                <Row className={'raw-height'}>
                    <Col lg={12} md={12} xs={12} sm={12}>
                        <Button label="Submit" disabled={!(formik.isValid && formik.dirty)} className="p-button-rounded" onClick={onSubmitHandler} />   
                    </Col>
                    <Col lg={12} md={12} xs={12} sm={12}>
                        <a href={registerRoute()}>Go to register page?</a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default withRouter(Login);