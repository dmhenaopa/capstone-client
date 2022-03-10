import React, { Fragment } from 'react';
import Image from '../../assets/amy-hirschi-JaoVGh5aJ3E-unsplash.jpg';
import { TextHeaderContact } from './TextHeaderContact';

export function HeaderContact() {
    return (
        <Fragment>
            <img src={Image} alt=""></img>
            <TextHeaderContact />
        </Fragment>
    );
}