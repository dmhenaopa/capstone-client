import React, { Fragment } from 'react';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import styles from './FormHome.module.scss'

export function FormHome() {
  function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p2xy1it', 'template_6o7eivc', e.target, '7d3yZ-_aCiGKZ6AMe').then((result) => {
      swal('Confirmación de envio', '¡Muchas gracias! Pronto estaremos en contacto con usted.', 'success');
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <Fragment>
      <Formik
        initialValues={{
          firstname:'',
          lastname:'',
          email:'',
          telephone:'',
        }}
        validate={(values) => {
          let errors = {};
          if(!values.firstname){
            errors.firstname = 'Por favor, ingrese su nombre';
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstname)){
            errors.firstname = 'El nombre solo puede contener letras y espacios';
          }
          if(!values.lastname){
            errors.lastname = 'Por favor, ingrese sus apellidos';
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
            errors.lastname = 'Los apellidos solo pueden contener letras y espacios';
          }
          if(!values.email){
            errors.email = 'Por favor, ingrese su correo electrónico';
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = 'Ingrese un correo electrónico válido';
          }
          if(!values.telephone){
            errors.telephone = 'Por favor, ingrese su télefono de contacto';
          } else if(!/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(values.telephone)) {
            errors.telephone = 'El número telefónico solo puede contener números y guiones';
          }
          return errors;
        }} 
      >

        {( {values, errors, touched, handleChange, handleBlur} ) => (
          <div className={styles.divFormHome}>
            <div className={styles.divTextFormHome}>
              <h2 className={styles.h2FormHome}>¡Comience ahora!</h2>
              <p className={styles.pFormHome}>Escribanos ahora y pronto estaremos en contacto con usted.
                No deje pasar la oportunidad de estar actualizado, con información
                100% confiable.
              </p>
            </div>
            <div className={styles.divStartNow}>
              <form id='form' onSubmit={SendEmail}>
                <div>
                  <label htmlFor="firstname">Nombre</label>
                  <input 
                    type="text" 
                    id="firstname" 
                    name="firstname" 
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstname && errors.firstname && <div className='error'>{errors.firstname}</div>}
                </div>

                <div>
                  <label htmlFor="lastname">Apellidos</label>
                  <input 
                    type="text" 
                    id="lastname" 
                    name="lastname" 
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastname && errors.lastname && <div className='error'>{errors.lastname}</div>}
                </div>

                <div>
                  <label htmlFor="email">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder='usuario@correo.com'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                </div>

                <div>
                  <label htmlFor="telephone">Número telefónico</label>
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    placeholder='300-000-0000 o 300000000'
                    value={values.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.telephone && errors.telephone && <div className='error'>{errors.telephone}</div>}
                </div>
                <button type="submit">Contactar a ventas</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </Fragment>
  );
}