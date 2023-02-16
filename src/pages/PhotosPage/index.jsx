import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/api';
import { AppContext, AppProvider } from '../../store/AppContext';
import './index.css';
import { Link } from 'react-router-dom';

function PhotosPage() {
  const params = useParams();
  const { albums, setAlbums } = useContext(AppContext);
  const [photo, setPhoto] = useState(null);
  const { favorites, setFavorites } = useContext(AppContext);
  const { authState, setAuthState } = useContext(AppContext);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.getPhotos(params.id);
      setPhoto(res);
    };
    fetch();
  }, []);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  if (photo === null) {
    return null;
  }
  return (
    <div>
      {photo.map((item) => (
        <div className="wrapper">
          <p className="title">{item.title}</p>
          <img src={item.url} className="img" alt="" />
          {authState && (
            <button className="button" onClick={() => addToFavorites(item)}>
              Добавить в любимые
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PhotosPage;
