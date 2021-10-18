import style from './content-style.module.scss';
import React, { useState, useCallback } from 'react';
import Photos from './Photos';
import Albums from './Albums';

const Content = () => {
  const [albums, setAlbums] = useState([]);
  const [activeAlbum, setActiveAlbum] = useState(null);

  const showPhotos = useCallback(
    (album) => {
      setActiveAlbum(album);
      <Photos album={activeAlbum} />;
    },
    [activeAlbum]
  );

  if (activeAlbum === null) {
    return (
      <Albums albums={albums} setAlbums={setAlbums} showPhotos={showPhotos} />
    );
  } else {
    return (
      <section className={style.contentWrap}>
        <Photos album={activeAlbum} setActiveAlbum={setActiveAlbum} />
      </section>
    );
  }
};

export default Content;
