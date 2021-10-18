import style from './content-style.module.scss';
import React, { useEffect } from 'react';
import { fetchAlbums } from '../../actions/fetch-albums';
import { useDispatch, useSelector } from 'react-redux';
import { addActiveAlbum } from '../../store/store';

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(fetchAlbums());
  }, []);

  const albums = useSelector((state) => state.albums);

  return (
    <section className={style.contentWrap}>
      <h3> Albums </h3>

      <div className={style.albums}>
        {albums.map((album) => {
          return (
            <div
              key={album.id}
              className={style.albumItem}
              onClick={() => dispatch(addActiveAlbum(album))}
            >
              {album.title}
            </div>
          );
        })}
      </div>
      <button
        className={style.backBtn}
        onClick={() => console.log('add album')}
      >
        Add album
      </button>
    </section>
  );
};

export default Albums;
