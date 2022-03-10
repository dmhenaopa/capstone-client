import React, { Fragment } from 'react';
import Image from '../../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
import { TextHeaderAboutUs } from './TextHeaderAboutUs';

export function HeaderAboutUs() {
    return (
        <Fragment>
            <img src={Image} alt=""></img>
            <TextHeaderAboutUs />
        </Fragment>
    );
}