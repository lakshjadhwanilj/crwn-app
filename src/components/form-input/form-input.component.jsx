import React from 'react';
// CSS
// import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {

    return (
        <div className='input-group mb-3'>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                    {label === 'Email' && <i className="far fa-envelope"></i>}
                    {label === 'Password' && <i className="fas fa-lock"></i>}
                    {label === 'Confirm Password' && <i className="fas fa-lock"></i>}
                    {label === 'Display Name' && <i className="far fa-envelope"></i>}
                </span>
            </div>
            <input
                className='form-control'
                onChange={handleChange}
                placeholder={label}
                {...otherProps}
            />
        </div>
    );
}

export default FormInput;