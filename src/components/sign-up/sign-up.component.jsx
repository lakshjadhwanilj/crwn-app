import React from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.utils';
// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// CSS
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.error(err);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title text-center'>
                    <i className="fas fa-lock"></i> SIGN UP
                </h2>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <div className='buttons'>
                        <div className=''>
                            <CustomButton type='submit'>SIGN UP</CustomButton>
                        </div>
                        <div className=''>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                Sign Up With Google
                            </CustomButton>
                        </div>
                    </div>
                </form>
                <div className='border-top border-dark mt-2 pt-2 text-center'>
                    <p> Already have an account! <Link to='/signin' className='text-primary'>Sign In Here!</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default SignUp;