import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../../utilities/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBInput } from 'mdbreact';
import login from '../../assets/img/login.jpg';
import Auth from '../Services/Auth';
import './Style.css';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateLogin = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 8
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            });

            isValid = false;
        }
        return isValid;
    };

    const authenticate = async (e) => {
        e.preventDefault();
        try {
            await Auth({ name: '', email: email, password: password }).then(
                (res) => {
                    if (res.status === 200) {
                        if(res.data.user.type === "candidat")
                        navigate('/home-candidat');
                        else
                        navigate('/home-recruteur');
                        console.log(res);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }

        const validate = validateLogin();
        if (validate) {
            setValidate({});
            setEmail('');
            setPassword('');
           // alert('Successfully Login');
        }
    };
    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    return (
        <div className='row'>
            <img
                id='optionalstuff'
                src={login}
                style={{
                    width: '60%',
                    height: '100%',
                    padding: '0.5px'
                }}
            ></img>{' '}
            <form
                style={{
                    width: '100%',
                    position: 'relative'
                }}
                className='auth-form col'
                method='POST'
                onSubmit={authenticate}
                autoComplete={'off'}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        marginRight: '200px'
                    }}
                    class='container py-5 h-100'
                >
                    <div class='row d-flex justify-content-start align-items-center h-100'>
                        <div>
                            <div class='card-body p-5 text-center'>
                                <h3 class='mb-5'>Sign in</h3>

                                <div class='form-outline mb-4'>
                                    <MDBInput
                                        hint='Your e-mail'
                                        type='email'
                                        className={`form-control ${
                                            validate.validate && validate.validate.email
                                                ? 'is-invalid '
                                                : ''
                                        }`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <br></br>
                                    <div class='form-outline mb-4'>
                                        <MDBInput
                                            hint='Your password'
                                            type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${
                                                validate.validate && validate.validate.password
                                                    ? 'is-invalid '
                                                    : ''
                                            }`}
                                            id='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div
                                        className={`invalid-feedback text-start ${
                                            validate.validate && validate.validate.password
                                                ? 'd-block'
                                                : 'd-none'
                                        }`}
                                    >
                                        {validate.validate && validate.validate.password
                                            ? validate.validate.password[0]
                                            : ''}
                                    </div>
                                    <br></br>

                                    <div class='form-check d-flex justify-content-start mb-4'>
                                        <input
                                            class='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='form1Example3'
                                        />
                                        <label class='form-check-label' for='form1Example3'>
                                            {' '}
                                            Remember password{' '}
                                        </label>
                                    </div>

                                    <button
                                        class='btn btn-primary btn-lg btn-block'
                                        type='submit'
                                        // onClick={() => navigate("/", { replace: true })}
                                    >
                                        Login
                                    </button>

                                    <hr class='my-4' />

                                    <div className='col-6'>
                                        <div className='forgot-password text-end'>
                                            <Link to='/forgot-password'>Forgot password?</Link>
                                        </div>
                                    </div>
                                    <div className='auth-option text-center pt-2'>
                                        No Account?{' '}
                                        <Link className='text-link' to='/register-candidat'>
                                            Sign up{' '}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Signin;
