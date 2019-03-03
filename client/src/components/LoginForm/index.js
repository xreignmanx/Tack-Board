import React from 'react';
import "./style.css";

// $("#btnLogin").click(function(event) {

//     //Fetch form to apply custom Bootstrap validation
//     var form = $("#formLogin")

//     if (form[0].checkValidity() === false) {
//       event.preventDefault()
//       event.stopPropagation()
//     }
    
//     form.addClass('was-validated');
//   });


//This form will give a user a way to log in using google

export default class LoginForm extends React.Component {
    // state = {
    // form: null,
    // usernameElem: null,
    // passordElem: null,
    // }
    // render(){
    //     const { onLogin } = this.props;
    render () {
    return (

               
       <div className="loginForm">
       <div class="row">
           <div class="col-md-12">
           <br></br>
               <h2 class="text-center text-brown mb-4">WELCOME BACK</h2>
                     <div class="row">
                        <div class="col-md- mx-auto">
                            <div class="card rounded-0" style={{borderWidth: '10px', borderColor: 'brown',
                            borderStyle: 'ridge', backgroundColor: 'tan'}}>
                                <div class="card-header">
                                    <h3 class="text-center mb-0">Login</h3>
                                </div>
                                <div class="card-body">
                                    <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                    <div class="form-group">
                                        <label for="uname1">EMAIL</label>
                                        <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""></input>
                                    </div>
                                    <div class="form-group">
                                        <label>PASSWORD</label>
                                        <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password"></input>
                                    </div>
                                    <div>
                                        <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input"></input>
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description small text-dark">Remember me on this computer</span>
                                        </label>
                                    </div>
                                    <button type="submit" style={{color: 'grey',  borderRadius: 0,
                                        backgroundColor: '#6b2302', borderColor: 'brown', borderWidth: '5px', borderStyle: 'ridge',
                                        fontWeight: 'bold'}}class="btn float-right" id="btnLogin">LOGIN</button>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="formContainer">
        //     <div class="col-sm-3"></div>
        //     <div class="col-sm-6">
        //         <div className='loginForm'>
        //             <form
        //                 ref={(elem) => this.form = elem}
        //                 onSubmit={(e) => {
        //                 e.preventDefault();
        //                     return onLogin({
        //                         username: this.usernameElem.value,
        //                         password: this.passwordElem.value
        //                     });
        //                 }}>
        //                     <input ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' />
        //                     <input ref={(input) => this.passordElem = input} type='password' name="password" placeholder='Password' />
        //                     <button className="btn btn-info" type='submit'> Submit</button>
        //             </form>
        //         </div>
        //         </div>
        //     <div class="col-sm-3"></div>
        // </div>
    )
    }
}
