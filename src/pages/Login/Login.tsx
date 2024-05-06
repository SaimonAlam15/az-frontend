import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from '../../context/AuthContext';
import './Login.css'

export const Login = () => {
    const {login} = useContext(AuthContext);
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
