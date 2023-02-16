import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { AppContext } from '../../store/AppContext';
import './albums.css';

function AlbumsPage() {
  const { albums, setAlbums } = useContext(AppContext);

  useEffect(() => {
    const fetch = async () => {
      if (albums.length == 0) {
        const response = await api.getAlbums();
        setAlbums(response);
        console.log(response);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {albums.map((item, index) => (
        <div className="albums__wrap">
          <div className="album__card">
            <p>{item.title}</p>
            <button className="button">
              <Link className="btn_text" to={`/photos/${index + 1}/`}>
                Подробнее
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlbumsPage;
