import React, { Fragment } from 'react';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import styles from './FormContact.module.scss';

export function FormContact() {
  function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p2xy1it', 'template_oig4wcr', e.target, '7d3yZ-_aCiGKZ6AMe').then((result) => {
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
          description:''
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
          if(values.subject === ''){
            errors.subject = 'Por favor, seleccione una de las opciones del menú';
          }
          if(!values.description){
            errors.description = 'Por favor, ingrese un texto que describa su solicitud';
          }
          return errors;
        }} 
      >

        {( {values, errors, touched, handleChange, handleBlur} ) => (
          <div className={styles.divFormContact}>
            <div className={styles.divContact}>
              <form id='form' onSubmit={SendEmail}>
                <div className={styles.divLeftColumn}>
                  <div>
                    <label htmlFor="firstname">Nombre </label>
                    <br />
                    <input 
                      type="text" 
                      id="firstname" 
                      name="firstname" 
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.firstname && errors.firstname && <div className={styles.error}>{errors.firstname}</div>}
                  </div>

                  <div>
                  <label htmlFor="email">Correo electrónico </label>
                  <br />
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder='usuario@correo.com'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>

                <div>
                  <label htmlFor='subject'>Asunto </label>
                  <br />
                  <select required id='subject' name='subject'>
                    <option></option>
                    <option value='compra'>Compra de productos</option>
                    <option value='actualización'>Actualización de datos</option>
                    <option value='información'>Información productos</option>
                    <option value='soporte-tech'>Soporte o fallas técnicas</option>
                    <option value='otro'>Otro</option>
                  </select>
                  {touched.subject && errors.subject && <div className={styles.error}>{errors.subject}</div>}
                </div>
              </div>

              <div className={styles.divRightColumn}>
                <div>
                  <label htmlFor="lastname">Apellidos </label>
                  <br />
                  <input 
                    type="text" 
                    id="lastname" 
                    name="lastname" 
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastname && errors.lastname && <div className={styles.error}>{errors.lastname}</div>}
                </div>

                <div>
                  <label htmlFor="telephone">Número telefónico </label>
                  <br />
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    placeholder='300-000-0000 o 300000000'
                    value={values.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.telephone && errors.telephone && <div className={styles.error}>{errors.telephone}</div>}
                </div>

                <div>
                  <label htmlFor='description'>Descripción </label>
                  <br />
                  <textarea
                    required
                    id='description'
                    name='description'
                    placeholder='Ingrese un texto que describa su solicitud'>
                  </textarea>
                  {touched.description && errors.description && <div className={styles.error}>{errors.description}</div>}
                </div>
              </div>

                <button className={styles.buttonFormContact} type="submit">Enviar formulario</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </Fragment>
  );
}