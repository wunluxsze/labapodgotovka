import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import './favorie.css';

function Favorite() {
  const { favorites, setFavorites } = useContext(AppContext);

  return (
    <div className="favorite__wrapper">
      {favorites.map((item) => {
        return (
          <div className="like">
            <p className="title">{item.title}</p>
            <img className="img__favorite" src={item.url} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Favorite;
