import React from "react";
import { useForm } from "react-hook-form";

export function FormContact() {
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

      <label htmlFor='subject'>Asunto</label>
      <select {...register('subject')} required>
          <option></option>
          <option value='buy'>Compra de productos</option>
          <option value='update'>Actualización de datos</option>
          <option value='information'>Información productos</option>
          <option value='tech-support'>Soporte o fallas técnicas</option>
          <option value='other'>Otro</option>
      </select>

      <label htmlFor='description'>Descripción</label>
      <textarea {...register('description')} required></textarea>
      <button type="submit">Contactar a ventas</button>
    </form>
  );
}
  
