import style from './user-info-styles.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector((state) => state.user[0]); // user[0] because it is hardcoded user

  return (
    <section className={style.info}>
      <h3> {user.name} </h3>
      <p>
        {' '}
        <b>Email:</b> {user.email}{' '}
      </p>
      <p>
        {' '}
        <b>Phone:</b> {user.phone}{' '}
      </p>
      <p>
        <b>Address:</b> {user.address.street},{user.address.suite},
        {user.address.city},{user.address.zipcode}
      </p>
      <p>
        {' '}
        <b>Website:</b> {user.website}
      </p>
    </section>
  );
};

export default UserInfo;
