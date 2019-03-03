import React from 'react';
// import { Redirect } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import Auth from '../../../utils/Auth';
// import 'style.css';

class Signin extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            redirectToReferrer: false
        };
        // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }


    login = (data) => {
        console.log("Logging in: " + data.username);
        fetch('api/users/login', {

        })
    }
    
    render() {
    return (
        // <div className="jumbotron">      
        //     <h1>LogIn</h1>
        //     <p>Welcome! Please Login.</p>
        //     <hr /><br />
        //     <input
        //         name="userName" />

        // </div>  
       
       
       <div class="container py-5">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mx-auto">
                        <div class="card rounded-0">
                            <div class="card-header">
                                <h3 class="mb-0">Login</h3>
                            </div>
                            <div class="card-body">
                                <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                    <div class="form-group">
                                        <label for="uname1">Username</label>
                                        <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""></input>
                                        <div class="invalid-feedback">Oops, you missed this one.</div>
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password"></input>
                                        <div class="invalid-feedback">Enter your password too!</div>
                                    </div>
                                    <div>
                                        <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input"></input>
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description small text-dark">Remember me on this computer</span>
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

)
    }
}

export default Signin;