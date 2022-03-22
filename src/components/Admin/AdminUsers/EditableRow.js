import React from 'react';
import styles from './Users.module.scss';

export function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {
    return (
        <tr>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Id'
                    name='id'
                    value={editFormData.id}
                    onChange={handleEditFormChange}                    
                ></input>
            </td>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Nombre'
                    name='first_name'
                    value={editFormData.first_name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Apellido'
                    name='last_name'
                    value={editFormData.last_name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Teléfono'
                    name='phone_number'
                    value={editFormData.phone_number}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Correo'
                    name='email'
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Empresa'
                    name='company'
                    value={editFormData.company}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className={styles.inputEditRow}
                    type='text'
                    required='required'
                    placeholder='Id subscripción'
                    name='subscription_id'
                    value={editFormData.subscription_id}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <div className={styles.divButtonsEditUser}>
                    <button className={styles.buttonSaveNewInfo} type='submit'>Guardar</button>
                    <button className={styles.buttonCancelNewInfo} type='button' onClick={handleCancelClick}>Cancelar</button>
                </div>
            </td>
        </tr>
    );
}