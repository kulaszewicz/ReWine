import React from 'react';
//import * as fs from 'fs';

import FormInput from './FormInput'
import Action from './Action'
import rewineImage from '../resources/rewine.png'

//const fs = require('fs');

//const raw = fs.readFileSync('./src/resources/winequality-red.csv', 'utf8').split('\n');
// const headers = raw[0].split(';').map(header => header.replace(/"/g, ''));
//
// const data = raw.
// slice(1).
// map(line => line.split(';').
// reduce((cur, v, i) => {
//     // Ensure that numberic values are between 0 and 1
//     // Admittedly this is a bit hacky, and I'd love to hear how machine
//     // learning experts handle this.
//     if (headers[i].includes('sulfur') || headers[i].includes('sugar')) {
//         cur[headers[i]] = parseFloat(v) / 1000;
//     } else if (headers[i].includes('alcohol')) {
//         cur[headers[i]] = parseFloat(v) / 100;
//     } else {
//         // Quality will be 0.1-1 rather than 1-10
//         cur[headers[i]] = parseFloat(v) / 10;
//     }
//     return cur;
// }, {}));
//
// console.log(data);


export default class RewineForm extends React.Component{
    state = {
        acidity: undefined,
        volatile: undefined,
        acid: undefined,
        sugar: undefined,
        chlorides: undefined,
        sulfur_free: undefined,
        sulfur_total: undefined,
        density: undefined,
        ph: undefined,
        sulphates: undefined,
        alcohol: undefined
    };

    handleAcidityChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({acidity: target}));
    };

    handleVolatileChange = (e) => {
        const target = parseFloat(e.target.value);
      this.setState(() =>({volatile: target}));
    };

    handleAcidChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({acid: target}));
    };

    handleSugarChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sugar: target}));
    };

    handleChloridesChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({chlorides: target}));
    };

    handleSulfurFreeChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sulfur_free: target}));
    };

    handleSulfurTotalChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sulfur_total: target}));
    };

    handleDensityChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({density: target}));
    };

    handlePhChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({ph: target}));
    };

    handleSulphatesChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sulphates: target}));
    };

    handleAlcoholChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({alcohol: target}));
    };


    handleActionSubmit = () => {
        console.log(this.state);
        this.props.handleToggleModal('result');
    };

    render() {
        return (
            <div className={'section-form'}>
                <div className={'container'}>
                    <div className={'rewine-form'}>
                        <div className={"form-header"}>
                            <h3 className={"form-header__title"}>Complete the form with your wine details!</h3>
                        </div>

                        <img className={'rewine-image'} id={'rewine-image'} src={rewineImage} />
                        <FormInput
                            handleChange = {this.handleAcidityChange}
                        />

                        <FormInput
                            handleChange = {this.handleVolatileChange}

                            inputTitle={'Volatile acidity:'}
                            inputName={'volatile'}
                            suggestedValue={'0.00 -- 1.00'}
                        />

                        <FormInput
                            handleChange = {this.handleAcidChange}

                            inputTitle={'Citric acid:'}
                            inputName={'acid'}
                            suggestedValue={'0.00 -- 1.00'}
                        />

                        <FormInput
                            handleChange = {this.handleSugarChange}

                            inputTitle={'Residual sugar:'}
                            inputName={'sugar'}
                            suggestedValue={'1.00 -- 15.00'}
                        />

                        <FormInput
                            handleChange = {this.handleChloridesChange}

                            inputTitle={'Chlorides:'}
                            inputName={'chlorides'}
                            suggestedValue={'0.00 -- 1.00'}
                        />

                        <FormInput
                            handleChange = {this.handleSulfurFreeChange}

                            inputTitle={'Free sulfur dioxide:'}
                            inputName={'sulfur-free'}
                            suggestedValue={'1 -- 60'}
                        />

                        <FormInput
                            handleChange = {this.handleSulfurTotalChange}

                            inputTitle={'Total sulfur dioxide:'}
                            inputName={'sulfur-total'}
                            suggestedValue={'10 -- 150'}
                        />

                        <FormInput
                            handleChange = {this.handleDensityChange}

                            inputTitle={'Density:'}
                            inputName={'density'}
                            suggestedValue={'0.9 -- 1.0'}
                        />

                        <FormInput
                            handleChange = {this.handlePhChange}

                            inputTitle={'pH:'}
                            inputName={'ph'}
                            suggestedValue={'2.00 -- 4.00'}
                        />

                        <FormInput
                            handleChange = {this.handleSulphatesChange}

                            inputTitle={'Sulphates:'}
                            inputName={'sulphates'}
                            suggestedValue={'0.00 -- 2.00'}
                        />


                        <FormInput
                            handleChange = {this.handleAlcoholChange}

                            inputTitle={'Alcohol:'}
                            inputName={'alcohol'}
                            suggestedValue={'8.0 -- 15.0'}
                        />

                        <Action
                            handleActionSubmit = {this.handleActionSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
