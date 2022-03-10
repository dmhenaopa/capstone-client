import React from 'react';
import { useForm } from "react-hook-form";

export function FormHome() {
  const { register, handleSubmit } = useForm();
  function onSubmit(values) {
    // Values para enviar la información
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='firstname'>Nombres</label>
      <input type='text' {...register('firstname')} required />

      <label htmlFor='lastname'>Apellidos</label>
      <input type='text' {...register('lastname')} required />
      
      <label htmlFor='email'>Correo electrónico</label>
      <input type='email' {...register('email')} required />

      <label htmlFor='phone'>Teléfono</label>
      <input type='tel' {...register('phone')} required />
      <button type="submit">Contactar a ventas</button>
    </form>
  );
}