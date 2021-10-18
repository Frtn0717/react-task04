import style from './photos-style.module.scss';
import React, { useEffect } from 'react';
import { fetchPhotos } from '../../actions/fetch-photos';
import { useDispatch, useSelector } from 'react-redux';
import { addActiveAlbum } from '../../store/store';

const Photos = () => {
  const dispatch = useDispatch();

  const activeAlbum = useSelector((state) => state.activeAlbum);

  useEffect(() => {
    return dispatch(fetchPhotos(activeAlbum.id));
  }, [activeAlbum]);

  const photos = useSelector((state) => state.photos);

  // const batToAlbums = () => {
  //   dispatch(addActiveAlbum(null));

  // }

  return (
    <section className={style.contentWrap}>
      <h3> {activeAlbum.title.toUpperCase()} </h3>

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
      <button
        className={style.backBtn}
        onClick={() => dispatch(addActiveAlbum(null))}
      >
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
