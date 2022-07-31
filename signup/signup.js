
let catchElem = (val) => {
    return document.querySelector(val);
}

import navbar from '../components/navbar.js';

catchElem('.navbar').innerHTML = navbar();

class AddUser {
    constructor(n, e, p) {
        this.name = n;
        this.email = e;
        this.password = p;
    }
}

let user_data = JSON.parse(localStorage.getItem('user_credentials')) || [];

let StoreSignUpCred = () => {

    let u_name = catchElem('#user_name').value;
    let u_mail = catchElem('#user_mail').value;
    let u_password = catchElem('#user_password').value;

    if (u_name == '' && u_mail == '' && u_password == '') {

        alert('Please enter valid input!');

    } else {

        let user_details = new AddUser(u_name, u_mail, u_password);

        if (validateUserSignUp(user_details.email) === true) {

            user_data.push(user_details);

            localStorage.setItem('user_credentials', JSON.stringify(user_data));
        }
        else {
            console.log('User Email already exists!');

            alert('User Email already exists!')
        }
    }
};

console.log(user_data);

catchElem('.signup').addEventListener('click', StoreSignUpCred);

let validateUserSignUp = (email) => {

    let user = user_data.filter((e) => {
        return e.email === email;
    });

    if (user.length > 0) {
        return false;
    } else {
        return true;
    }
}


