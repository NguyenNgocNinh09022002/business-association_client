import './FormLogin.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-form">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Nhập email ... "
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu ... "
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <label>
                    <input
                        className="remember__me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember me
                </label>

                <button type="submit">Đăng nhập</button>
                <div className="forgot__password">
                    <Link to="">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;
