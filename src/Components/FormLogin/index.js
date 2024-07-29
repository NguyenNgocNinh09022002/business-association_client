import './FormLogin.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import APIs from '../../APIs';
import { login, useMyContextProvider } from '../../store';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    
    const [controller, dispatch] = useMyContextProvider();
    const [isLogin, setIsLogin] = useState(false)

    useEffect(()=>{
        if(isLogin) document.location.href = '/admin/posts'
    }, [isLogin])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
       const result = APIs.login(email, password).then(data => {
        if(data) {
           login(dispatch, email, 'admin_1')
        localStorage.setItem('hiephoidoanhnghiep.name', data.fullName);
        localStorage.setItem('hiephoidoanhnghiep.role', data.role);
           setTimeout(()=>{ setIsLogin(true)}, 2000)
        }
        else setError('Thông tin đăng nhập không chính xác!')
       })
    };

    return (
        <div className="login-form">
            <h2 style={{marginBottom:30}}>Đăng nhập</h2>
            <p style={{color: 'red'}}>{error}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"><b>Email:</b></label>
                    <input
                        style={{fontSize:16}}
                        type="email"
                        placeholder="Nhập email ... "
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password"><b>Mật khẩu:</b></label>
                    <input
                        style={{fontSize:16}}
                        type="password"
                        placeholder="Nhập mật khẩu ... "
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* <label>
                    <input
                        className="remember__me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember me
                </label> */}

                <button type="submit"><b>Đăng nhập</b></button>
                {/* <div className="forgot__password">
                    <Link to="">Forgot password?</Link>
                </div> */}
            </form>
        </div>
    );
};

export default FormLogin;
