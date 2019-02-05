import React from 'react';

//This form will give a user a way to log in using google
export default class LoginForm extends React.Component {

    form: null;
    usernameElem: null;
    passordElem: null;

    render(){
        const { onLogin } = this.props;
    return (
        <div className='container'>
        <form
            ref={(elem) => this.form = elem}
            onSubmit={(e) => {
                e.preventDefault();
                return onLogin({
                    username: this.usernameElem.value,
                    password: this.passwordElem.value
                });
            }}>
        <input ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' />
        <input ref={(input) => this.passordElem = input} type='password' name="password" placeholder='Password' />
        <button
            className="btn btn-info"
            type='submit'
        > Submit
        </button>
    </form>


        </div>
    )
    }
}