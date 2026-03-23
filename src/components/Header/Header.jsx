import { useAuthStore } from "../../store/auth-store";
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

export const Header = () => {
    const { isAuth, user, logout } = useAuthStore();
    const location = useLocation();

    const hideHeaderPaths = ['/auth', '/register'];
    if (hideHeaderPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <header className="main-header">
            <div className="header-container">
                <div className="header-user-info">
                    <span className="user-status">
                        {isAuth ? `Привет, ${user?.email}` : 'Гость'}
                    </span>
                </div>
                
                <nav className="header-nav">
                    <Link to="/" className="nav-link">Главная</Link>
                    
                    {isAuth && (
                        <Link to="/create" className="nav-link create-link">
                            Создать пост
                        </Link>
                    )}
                    
                    {isAuth ? (
                        <button onClick={logout} className="logout-button">
                            Выход
                        </button>
                    ) : (
                        <Link to="/auth" className="nav-link login-link">
                            Вход
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};