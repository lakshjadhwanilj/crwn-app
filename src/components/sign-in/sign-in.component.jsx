import React from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
// COMPONENTS
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// CSS
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.error(err);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title text-center'>
                    <i className="fas fa-lock"></i> SIGN IN
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <div className=''>
                            <CustomButton type='submit'>Sign In</CustomButton>
                        </div>
                        <div className=''>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                Sign In With Google
                            </CustomButton>
                        </div>
                    </div>
                </form>
                <div className='border-top border-dark mt-2 pt-2 text-center'>
                    <p> Don't have an account! <Link to='/signup' className='text-primary'>Sign Up Here!</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default SignIn;