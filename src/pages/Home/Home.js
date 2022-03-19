import React, { Fragment } from 'react';
import { Feature } from '../../components/Feature/Feature';
import { Steps } from '../../components/Steps/Steps';
import { Form } from '../../components/Forms/Form';
import { Header } from '../../components/Header/Header';

export function Home() {
    return (
        <Fragment>
            <Header />
            <Feature />
            <Steps />
            <Form />
        </Fragment>
    );
}