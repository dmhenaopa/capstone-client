import React from "react";
import { useForm } from "react-hook-form";

export function FormLogin() {
  const { register, handleSubmit } = useForm();
  function onSubmit(values) {
    // Values para enviar la información
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='user'>Usuario</label>
      <input type='text' {...register('user')} />

      <label htmlFor='password'>Contraseña</label>
      <input type='password' {...register('password')} />
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
}