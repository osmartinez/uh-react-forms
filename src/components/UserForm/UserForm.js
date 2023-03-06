import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.module.css';

const UserForm = ({userData,handleChangeData}) => (
  <form>
    <fieldset>
      <legend>Nombre</legend>
      <input name='name' defaultValue={userData.name} onChange={handleChangeData} placeholder='Ingresa tu nombre'></input>
    </fieldset>
    <fieldset>
      <legend>Apellidos</legend>
      <input name='surname' defaultValue={userData.surname} onChange={handleChangeData} placeholder='Ingresa tus apellidos'></input>
    </fieldset>
    <fieldset>
      <legend>Email</legend>
      <input name='email' defaultValue={userData.email} onChange={handleChangeData} placeholder='Ingresa tu email'></input>
    </fieldset>
    <fieldset>
      <legend>Foto</legend>
      <input name='photo' defaultValue={userData.photo} onChange={handleChangeData} placeholder='Ingresa un link con tu foto'></input>
    </fieldset>
  </form>
);

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
