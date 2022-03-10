import React, { Fragment } from 'react';
import Image from '../../assets/sear-greyson-K-ZsC7YdJ6Y-unsplash.jpg';
import { TextHeaderProducts } from './TextHeaderProducts';

export function HeaderProducts() {
    return (
        <Fragment>
            <img src={Image} alt=""></img>
            <TextHeaderProducts />
        </Fragment>
    );
}