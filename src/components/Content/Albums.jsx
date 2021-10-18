import style from './content-style.module.scss';
import React, { useCallback, useEffect } from 'react';
import { fetchAlbums } from '../../actions/fetch-albums';
import { useDispatch, useSelector } from 'react-redux';
import { addActiveAlbum, addAlbums } from '../../store/store.js';

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const albums = useSelector(({ albums }) => albums);

  const addItemToAlbum = useCallback(() => {
    dispatch(addAlbums([{ userId: 21, id: 23, title: 'Waterfall' }])); // hardcoded album
  }, [dispatch]);

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
      <button className={style.backBtn} onClick={addItemToAlbum}>
        Add album
      </button>
    </section>
  );
};

export default Albums;
