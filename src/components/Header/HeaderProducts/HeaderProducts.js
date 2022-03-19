import React, { Fragment } from 'react';
import Image from '../../assets/sear-greyson-K-ZsC7YdJ6Y-unsplash.jpg';
import { TextHeaderProducts } from './TextHeaderProducts';
import styles from './HeaderProducts.module.scss';

export function HeaderProducts() {
    return (
        <Fragment>
            <img className={styles.imgHeaderProducts} src={Image} alt=""></img>
            <TextHeaderProducts />
        </Fragment>
    );
}