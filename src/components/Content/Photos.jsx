import style from './photos-style.module.scss';
import React, { useEffect } from 'react';
import { fetchPhotos } from '../../requests/fetch-photos';
import { useDispatch, useSelector } from 'react-redux';

const Photos = ({ album, setActiveAlbum }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(fetchPhotos());
  }, []);

  const photos = useSelector((state) => state.photos);

  return (
    <section className={style.contentWrap}>
      <h3> {album.title.toUpperCase()} </h3>

      <div className={style.photos}>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className={style.photosItem}>
              <img src={photo.thumbnailUrl} alt={photo.title}></img>
              <span>{photo.id}</span>
            </div>
          );
        })}
      </div>
      <button className={style.backBtn} onClick={() => setActiveAlbum(null)}>
        Back
      </button>
      <button
        className={style.backBtn}
        onClick={() => console.log('add new photo')}
      >
        Add photo
      </button>
    </section>
  );
};

export default Photos;
