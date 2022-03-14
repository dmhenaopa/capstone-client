import React, { Fragment, useState } from 'react';
import { Formik } from 'formik';
import styles from './FormLogin.module.scss';

export function FormLogin() {
  const [sendForm, setSendForm] = useState(false);
  return (
    <Fragment>
      <Formik
        initialValues={{
          username:'',
          password:'',
        }}
        validate={(values) => {
          let errors = {};
          if(!values.username){
            errors.username = 'Por favor, ingrese un usuario';
          }
          if(!values.password){
            errors.password = 'Por favor, ingrese la contraseña';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm })=> {
          resetForm();
          //console.log(values); //Aqui va conexion a api o envio de datos
          setSendForm(true);
          setTimeout(() => setSendForm(false), 10000);
        }}
      >
        {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
          <div className={styles.divFormLogin}>
            <h1 className={styles.h1FormLogin}>Ingresar</h1>
            <div className={styles.divLogin}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Usuario</label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.username && errors.username && <div className='error'>{errors.username}</div>}
                </div>
                <div>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && <div className='error'>{errors.password}</div>}
                </div>
                <button type="submit">Ingresar</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </Fragment>
  );
}