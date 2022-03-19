import React, { Fragment } from 'react';
import Image from '../../assets/amy-hirschi-JaoVGh5aJ3E-unsplash.jpg';
import { TextHeaderContact } from './TextHeaderContact';
import styles from './HeaderContact.module.scss';

export function HeaderContact() {
    return (
        <Fragment>
            <img className={styles.imgHeaderContact} src={Image} alt=""></img>
            <TextHeaderContact />
        </Fragment>
    );
}