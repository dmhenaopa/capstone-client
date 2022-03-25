import React, { Fragment, useState } from 'react';
import styles from './Products.module.scss';
import data from '../../../mock.data.products.json';
import { ReadOnlyProduct } from './ReadOnlyProduct';
import { EditableProduct } from './EditableProduct';


export function Products() {
    const [products, setProducts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      product_id: '',
      product_name: '',
      description: '',
      version: '',
    });

    const [editFormData, setEditFormData] = useState({
      product_id: '',
      product_name: '',
      description: '',
      version: '',
    });

    const [editProductId, setEditProductId] = useState(null);

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

      const fieldName = event.target.getAttribute('data-name');
      const fieldValue = event.target.textContent;
      
    
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newProduct = {
        product_id: addFormData.product_id,
        product_name: addFormData.product_name,
        description: addFormData.description,
        version: addFormData.version,
      };

      const newProducts = [...products, newProduct];
      setProducts(newProducts);
    };

    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedProduct = {
        product_id: editFormData.product_id,
        product_name: editFormData.product_name,
        description: editFormData.description,
        version: editFormData.version,
      }

      const newProducts = [...products];
      const index = products.findIndex((product)=> product.product_id === editProductId)
      newProducts[index] = editedProduct;
      setProducts(newProducts);
      setEditProductId(null);
    }

    const handleEditClick = (event, product) => {
      event.preventDefault();
      setEditProductId(product.product_id);

      const formValues = {
        product_id: product.product_id,
        product_name: product.product_name,
        description: product.description,
        version: product.version,
      }

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditProductId(null);
    }

    const handleDeleteClick = (productId) => {
      const newProducts = [...products];

      const index = products.findIndex((product) => product.id === productId);
      newProducts.splice(index, 1);
      setProducts(newProducts);
    }

    return (
        <Fragment>
            <input className={styles.inputSearch} type='search' name='search' placeholder='Buscar producto' />
            <div className={styles.divFormAndNewProduct}>
                <div className={styles.divFormProducts}>
                    <form onSubmit={handleEditFormSubmit}>
                        {products.map((product) =>
                            <Fragment>
                                { editProductId === product.product_id ? (
                                <EditableProduct product={product} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                ) : (
                                <ReadOnlyProduct product={product} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                                )}
                            </Fragment>
                        )}
                    </form>
                </div>
                <div className={styles.divNewProduct}>
                    <h2>Nuevo producto</h2>
                    <form onSubmit={handleAddFormSubmit}>
                        <div className={styles.divFormLeftRight}>
                        <div className={styles.divLeftSide}>

                            <input
                                className={styles.inputProductForm}
                                type='text'
                                required='required'
                                placeholder='id del producto'
                                name='product_id'
                                onChange={handleAddFormChange}
                            />
                        
                            <input
                                className={styles.inputProductForm}
                                type='text'
                                required='required'
                                placeholder='Nombre del producto'
                                name='product_name'
                                onChange={handleAddFormChange}
                            />
                            <input
                                className={styles.inputProductForm}
                                type='text'
                                required='required'
                                placeholder='Control de versión'
                                name='version'
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className={styles.divRightSide}>
                            <textarea
                                className={styles.inputProductForm} 
                                type='text'
                                required='required'
                                placeholder='Descripción del producto'
                                name='description'
                                onChange={handleAddFormChange}
                            />
                            <input type='file'
                                className={styles.inputFileUpload}
                                id='fileUpload'
                            />
                        <button type='submit' className={styles.buttonNewProduct}>Añadir producto</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}