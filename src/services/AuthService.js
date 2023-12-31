import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    Logout,
} from '../store/actions/AuthActions';

// PARA LLAMAR LOS DATOS DE LOS tokenDetailsStringconst tokenData = localStorage.getItem('userDetails');
// const tokenParse = JSON.parse(tokenData);
// console.log("tokeeen1: "+tokenParse.cui);

export function signUp(email, password) {
    //axios call
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}

export function login(Usuario, Contraseña) {
    const postData = {
        Usuario,
        Contraseña
    };
    return axios.post(
        `https://2z02nztm-3001.use2.devtunnels.ms/api/Usrv/login`,
        postData,
    );
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':            
            swal("Oops", "Email already exists", "error");
            break;
        case 'INVALID_DATA':
           swal("Oops", "DATOS INVALIDOS", "error",{ button: "reintentar!",});
           break;
         case 'INVALID_PASSWORD':
             swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
             break;
        case 'INACTIVE_USER':
            return 'USUARIO INACTIVO';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
		return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }
		
    dispatch(loginConfirmedAction(tokenDetails));
	
    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}

export function isLogin() {
    const tokenDetailsString = localStorage.getItem('userDetails');

    if (tokenDetailsString) {
        return true;
    }else{
        return false;
    }
}