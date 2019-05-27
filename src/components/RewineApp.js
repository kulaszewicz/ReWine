import React from "react";
import * as fs from 'fs';

import Header from './Header'
import RewineForm from './RewineForm'

export default class RewineApp extends React.Component {
    render () {
        return (
            <div>
                <Header />


                <RewineForm />

            </div>
        )
    }
};