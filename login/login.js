
let catchElem = (val) => {
    return document.querySelector(val);
}

import navbar from '../components/navbar.js';

catchElem('.navbar').innerHTML = navbar();

let user_data = JSON.parse(localStorage.getItem('user_credentials'));

let login_credentials = JSON.parse(localStorage.getItem('login_users')) || [];

let UserLoginCred = () => {

    let login_data =
    {
        u_mail: catchElem('#email').value,
        u_password: catchElem('#password').value
    }

    if (login_data.u_mail == '' && login_data.u_password == '') {

        alert('Please enter valid input!');

    } else {

        if (validateUserLogIn(login_data.u_mail, login_data.u_password) === true) {

            login_credentials.push(login_data);

            localStorage.setItem('login_users', JSON.stringify(login_credentials));

            alert('Login Success!');
        }
        else {

            console.log('Wrong Password or Incorrect Email entered. Please check and type again!');

            alert('Wrong Password or Incorrect Email entered. Please check and type again!');
        }
    }
};

catchElem('.login').addEventListener('click', UserLoginCred);

let validateUserLogIn = (email, password) => {

    let user = user_data.filter((e) => {
        return e.email === email && e.password === password;
    });

    if (user.length > 0) {
        return true;
    } else {
        return false;
    }
};


