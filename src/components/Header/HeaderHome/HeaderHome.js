import React, { Fragment } from 'react';
import Image from '../../assets/venti-views-1cqIcrWFQBI-unsplash.jpg';
import { TextHeaderHome } from './TextHeaderHome';

export function HeaderHome() {
    return (
        <Fragment>
            <img src={Image} alt=""></img>
            <TextHeaderHome />
        </Fragment>
    );
}