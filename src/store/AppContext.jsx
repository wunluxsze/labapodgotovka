import { createContext, useState } from 'react';

const AppContext = createContext();

const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [authState, setAuthState] = useState(false);

  return (
    <Provider
      value={{
        albums,
        setAlbums,
        favorites,
        setFavorites,
        authState,
        setAuthState,
      }}>
      {children}
    </Provider>
  );
};

export { AppProvider, AppContext };
