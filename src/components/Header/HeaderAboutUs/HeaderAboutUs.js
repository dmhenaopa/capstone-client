import React, { Fragment } from 'react';
import Image from '../../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
import { TextHeaderAboutUs } from './TextHeaderAboutUs';
import styles from './HeaderAboutUs.module.scss';

export function HeaderAboutUs() {
    return (
        <Fragment>
            <img className={styles.imgHeaderAboutUs} src={Image} alt=""></img>
            <TextHeaderAboutUs />
        </Fragment>
    );
}