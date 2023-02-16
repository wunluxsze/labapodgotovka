import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import AlbumsPage from './pages/AlbumsPage';
import PhotosPage from './pages/PhotosPage';
import FavoritePage from './pages/FavoritePage';
import Registration from './pages/RegistrationPage';
import Login from './pages/LoginPage';
import { AppContext } from './store/AppContext';
import './app.css';

function App() {
  const { authState, setAuthState } = useContext(AppContext);

  const logout = () => {
    setAuthState(false);
  };
  return (
    <div>
      <header>
        <div className="wrap">
          <p>
            <Link className="link" to="/">
              Главная страница
            </Link>
          </p>
          <p>
            {authState && (
              <Link className="link" to="/favorites">
                Любимые
              </Link>
            )}
          </p>
          <p>
            {!authState && (
              <Link className="link" to="/reg">
                Зарегестрироваться
              </Link>
            )}
          </p>
          <p>
            {!authState && (
              <Link className="link" to="/login">
                Войти
              </Link>
            )}
          </p>
          {authState && (
            <button className="link" onClick={() => logout()}>
              Выйти из аккаунта
            </button>
          )}
        </div>
      </header>
      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AlbumsPage />} />
        <Route path="/photos/:id" element={<PhotosPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
