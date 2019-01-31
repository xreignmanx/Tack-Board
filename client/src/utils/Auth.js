const Auth = {
    isAuthenticated: false,
    authenticate(cb) {

        fetch('api/users/user', {
            credentials: 'include'
        })
        .then((res) => {
            this.isAuthenticated = true
            if (typeof cb === 'function') {
                cb(res.json().user);
            }
        })
        .catch((err) => {
            console.log('Error' + err);
        });
    },
    signout(cb) {
        fetch('api/users/logout', {
            method: 'POST',
            credentials: 'include'
        })
        .then((res) => {
            this.isAuthenticated = false;
            if ( typeof cb === 'function') {
                cb(true);
            }
        })
        .catch((err) => {
            console.log('Error logging out');
            if (typeof cb === 'function' ){
                cb(false);
            }
        });
    }
}

export default Auth;