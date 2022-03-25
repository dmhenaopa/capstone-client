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
          //Login user
          /*fetch('http://localhost:5000/api/v1/user/login', {
            method: 'POST',
            body: JSON.stringify({email: values.username, password: values.password}),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => console.log(data));*/
          //
          if(values.username === 'ernestop' & values.password === 'paramito'){
            window.location.href = 'http://localhost:3001/ernestop/productos';
          }
          else if(values.username === 'admin' & values.password === 'adminuser'){
            window.location.href = 'http://localhost:3001/admin/usuarios';
          }            
          
          
          setSendForm(true);
          setTimeout(() => setSendForm(false), 10000);
        }}
      >
        {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
          <div className={styles.divFormLogin}>
            <div className={styles.divFormLoginColor}>
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
                    {touched.username && errors.username && <div className={styles.error}>{errors.username}</div>}
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
                    {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
                  </div>
                  <button className={styles.buttonFormLogin} type="submit">Ingresar</button>
                  <a className={styles.aFormLogin} href='/contacto'>Aún no tengo un usuario</a>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </Fragment>
  );
}