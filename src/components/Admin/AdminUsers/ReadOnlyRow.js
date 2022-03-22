import React from 'react';
import styles from './Users.module.scss';

export function ReadOnlyRow({ contact, handleEditClick, handleDeleteClick }) {
    return (
        <tr>
            <td>{contact.id}</td>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.phone_number}</td>
            <td>{contact.email}</td>
            <td>{contact.company}</td>
            <td>{contact.subscription_id}</td>
            <td>
                <div className={styles.divButtonsReadUser}>
                <button className={styles.buttonEditUser}
                    type='button' 
                    onClick={(event) => handleEditClick(event, contact)}
                >Editar</button>
                <button className={styles.buttonDeleteUser}
                    type='button'
                    onClick={() => handleDeleteClick(contact.id)}
                >Eliminar</button>
                </div>
            </td>
        </tr>
    );
}