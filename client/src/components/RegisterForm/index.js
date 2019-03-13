import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class RegisterForm extends React.Component {
    render () {
        return (
            <div className="registerForm">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center text-brown mb-4"></h2>
                                <div class="row">
                                <div class="col-md- mx-auto">
                                    <div class="card rounded-0" style={{borderWidth: '10px', borderColor: 'brown',
                                    borderStyle: 'ridge', backgroundColor: 'tan'}}>
                                        <div class="card-header">
                                            <h3 class="text-center mb-0">REGISTRATION</h3>
                                        </div>
                                        <div class="card-body">
                                            <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                            <div class="form-group">
                                                <label for="uname1">EMAIL</label>
                                                <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""></input>
                                            </div>
                                            <div class="form-group">
                                                <label>CREATE PASSWORD</label>
                                                <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password"></input>
                                            </div>
                                            <div>
                                                <label class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"></input>
                                                <span class="custom-control-indicator"></span>
                                                {/* <span class="custom-control-description small text-dark">Remember me on this computer</span> */}
                                                </label>
                                            </div>
                                            <Link to='/client'>
                                                <button type="submit" style={{color: 'tan',  borderRadius: 0,
                                                backgroundColor: '#6b2302', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                                                fontWeight: 'bold'}}class="btn float-right" id="btnLogin">REGISTER</button>
                                            </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

// 		state = {
// 		form: null,
// 		usernameElem: null,
// 		passordElem: null,
// 		}
// 			render() {
// 				const { onRegister } = this.props;
// 				console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
// 					return (
// 						<div className="container">
// 							<form>
// 								ref={(elem) => this.form = elem}
// 								onSubmit={(e) => {
// 								e.preventDefault();
// 									return onRegister({
// 										username: this.usernameElem.value,
// 										password: this.passwordElem.value
// 									});
// 								}}
				
// 									<input ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' />
// 									<input ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' />
// 									<button className="btn btn-default"	type='submit'>Submit</button>
// 							</form>
// 						</div>
// 		)
// 	}
// }


// import React from 'react';
// import {Link, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import RegComp from '../components/Register';
// import Cabinet from '../components/Cabinet';

// class Register extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "",
//             password: "",
//             redirectTo: false
//         };
//         this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(e) {
//         console.log(e.target.name, e.target.value);
//         this.setState({ [e.target.name]: e.target.value });
//     }
//     handleRegisterSubmit(e) {
//         console.log( "handleRegisterSubmit firing in client/src/pages/register",
//         this.state);
//         e.preventDefault();

//         axios
//             .post("/api/userRoutes/register", {
//                 email: this.state.email,
//                 password: this.state.password
//             })
//             .then(res => {
//                 console.log("Good response from client side");
//                 if (!res.data.errmsg) {
//                     console.log('success');
//                     this.setState({ redirectTo: true });
//                 } else {
//                     console.log('There is an error!');
//                 }                
//             })
//             .catch(err => {
//                 console.log('signup error', err);
//             });
//     }

//     render() {
//         const { redirectTo } = this.state;
//         if (redirectTo) {
//         return <Redirect to="/login" />;
//         } else {
//         return (
//             <>

//             {/* <RegComp /> */}
//             <h1> Hello World</h1>
//             <div className='jumbotron'>
//             <label for='email'>Email:</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               autoComplete="current-email"
//             />
//             <label for='password'>Password:</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//             <input
//               type="submit"
//               value="Sign up"
//               onClick={this.handleSignupSubmit}
//             />
//             </div>


            
//             <Cabinet />
//             </>
//         )
//     }
// }

// }

// export default Register;