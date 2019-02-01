import React from 'react';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import RegComp from '../components/Register';
import Cabinet from '../components/Cabinet';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            redirectTo: false
        };
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }
    handleRegisterSubmit(e) {
        console.log( "handleRegisterSubmit firing in client/src/pages/register",
        this.state);
        e.preventDefault();

        axios
            .post("/api/userRoutes/register", {
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                console.log("Good response from client side");
                if (!res.data.errmsg) {
                    console.log('success');
                    this.setState({ redirectTo: true });
                } else {
                    console.log('There is an error!');
                }                
            })
            .catch(err => {
                console.log('signup error', err);
            });
    }

    render() {
        const { redirectTo } = this.state;
        if (redirectTo) {
        return <Redirect to="/login" />;
        } else {
        return (
            <>

            {/* <RegComp /> */}
            <h1> Hello World</h1>
            <div className='jumbotron'>
            <label for='email'>Email:</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="current-email"
            />
            <label for='password'>Password:</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Sign up"
              onClick={this.handleSignupSubmit}
            />
            </div>


            
            <Cabinet />
            </>
        )
    }
}

}

export default Register;