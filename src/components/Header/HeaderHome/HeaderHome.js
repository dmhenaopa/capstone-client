import React, { Fragment } from 'react';
import Image from '../../assets/venti-views-1cqIcrWFQBI-unsplash.jpg';
import { TextHeaderHome } from './TextHeaderHome';
import styles from './HeaderHome.module.scss';

export function HeaderHome() {
    return (
        <Fragment>
            <img className={styles.imgHeaderHome} src={Image} alt=""></img>
            <TextHeaderHome />
        </Fragment>
    );
}