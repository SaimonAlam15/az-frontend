import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { _post } from '../services/apiClient';


const AuthContext = createContext<any>(null);

export default AuthContext;

export const AuthProvider = ({children}: any) => {
    let [user, setUser] = useState(() => (localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens") ?? "") : null));
    let [authTokens, setAuthTokens] = useState( () => (localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens") ?? "") : null));
    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    let login = async(e) => {
        e.preventDefault();
        let response = await _post("/users/login", {
            email: e.target.email.value,
            password: e.target.password.value
        });

        if (response.status === 200) {
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            setUser(jwtDecode(response.data));
            setAuthTokens(response.data);
            navigate("/");
        }
    }

    let logout = () => {
        localStorage.removeItem("authTokens");
        setUser(null);
        setAuthTokens(null);
        navigate("/login");
    }

    const updateToken = async() => {
        let response = await _post("/users/token/refresh", {
            refresh: authTokens?.refresh
        });

        if (response.status === 200) {
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            setUser(jwtDecode(response.data));
            setAuthTokens(response.data);
        }
        else {
            logout();
        }

        if (loading) {
            setLoading(false);
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        login: login,
        logout: logout,
    }
    
    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 15
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    },[authTokens])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}