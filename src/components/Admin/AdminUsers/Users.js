import React, { Fragment, useState } from 'react';
import data from '../../../mock.data.json';
import { EditableRow } from "./EditableRow";
import { ReadOnlyRow } from "./ReadOnlyRow";
import styles from './Users.module.scss';

export function Users() {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id:'',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        company: '',
        subscription_id: ''
    });

    const [editFormData, setEditFormData] = useState({
        id:'',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        company: '',
        subscription_id: ''
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: addFormData.id,
            first_name: addFormData.first_name,
            last_name: addFormData.last_name,
            phone_number: addFormData.phone_number,
            email: addFormData.email,
            company: addFormData.company,
            subscription_id: addFormData.subscription_id
        };

        const newContacts = [...contacts, newContact]
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,//editFormData.id, //DIFERENTE id: editContactId,
            first_name: editFormData.first_name,
            last_name: editFormData.last_name,
            phone_number: editFormData.phone_number,
            email: editFormData.email,
            company: editFormData.company,
            subscription_id: editFormData.subscription_id
        };

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    }

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            phone_number: contact.phone_number,
            email: contact.email,
            company: contact.company,
            subscription_id: contact.subscription_id
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }


    return (
        <Fragment>
            <input className={styles.inputSearch} type='search' name='search' placeholder='Buscar usuario' />
            <button className={styles.buttonNewProduct}>Agregar nuevo usuario</button>
            <div className={styles.divUsersTable}>
                <form onSubmit={handleEditFormSubmit}>
                    <table id='users' className={styles.tableUsersTable}>
                        <thead>
                            <tr>
                                <th>ID Usuario</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Teléfono</th>
                                <th>Correo electrónico</th>
                                <th>Empresa</th>
                                <th>ID Producto</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact) => (
                                <Fragment>
                                    { editContactId === contact.id ?
                                    (<EditableRow 
                                            editFormData={editFormData} 
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />) :
                                        (<ReadOnlyRow
                                            contact={contact} 
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />)
                                    }
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
                <div className={styles.newUser}>
                    <h2>Nuevo usuario</h2>
                    <form onSubmit={handleAddFormSubmit}>
                        <input 
                            type='text' 
                            name='id' 
                            required='required' 
                            placeholder='Id'
                            onChange={handleAddFormChange}
                        />
                        <input 
                            type='text' 
                            name='first_name' 
                            required='required' 
                            placeholder='Nombre'
                            onChange={handleAddFormChange}
                        />
                        <input 
                            type='text' 
                            name='last_name' 
                            required='required' 
                            placeholder='Apellidos'
                            onChange={handleAddFormChange}
                        />
                        <input 
                            type='text' 
                            name='phone_number' 
                            required='required' 
                            placeholder='Número telefónico'
                            onChange={handleAddFormChange}
                        />
                        <input 
                            type='text' 
                            name='email' 
                            required='required' 
                            placeholder='Correo electrónico'
                            onChange={handleAddFormChange}
                        />
                        <input 
                            type='text' 
                            name='company' 
                            required='required' 
                            placeholder='Nombre empresa'
                            onChange={handleAddFormChange}
                        />
                        <input 
                            type='text' 
                            name='subscription_id' 
                            required='required' 
                            placeholder='Id de suscripción'
                            onChange={handleAddFormChange}
                        />
                        <button type='submit'>Ingresar información</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}