import React from 'react';

import dataset from '../resources/winequality'
import FormInput from './FormInput'
import Action from './Action'
import rewineImage from '../resources/rewine.png'
import glassImage from '../resources/glass.png'
import * as Reviewer from './Reviewer'

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
        this.setState(() =>({acidity: target/100}));
    };

    handleVolatileChange = (e) => {
        const target = parseFloat(e.target.value);
      this.setState(() =>({volatile: target/10}));
    };

    handleAcidChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({acid: target/10}));
    };

    handleSugarChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sugar: target/1000}));
    };

    handleChloridesChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({chlorides: target/10}));
    };

    handleSulfurFreeChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sulfur_free: target/1000}));
    };

    handleSulfurTotalChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sulfur_total: target/1000}));
    };

    handleDensityChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({density: target/10}));
    };

    handlePhChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({ph: target/10}));
    };

    handleSulphatesChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({sulphates: target/10}));
    };

    handleAlcoholChange = (e) => {
        const target = parseFloat(e.target.value);
        this.setState(() =>({alcohol: target/100}));
    };


    handleActionSubmit = () => {
        this.handleSetScore();
        this.props.handleToggleModal('result');
    };


    handleSetScore = () => {
        const data = Reviewer.handleTransformDataSet(dataset);
        const quality = (Reviewer.handleRunNetwork(this.props.neuralNetwork, this.state, data)).quality;
        this.props.handleSetQuality(quality);
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className={'section-form'}>
                <div className={'container'}>
                    <div className={'rewine-form'}>
                        <div className={"form-header"}>
                            <h3 className={"form-header__title"}>Complete the form with your wine details!</h3>
                        </div>

                        <img className={'rewine-image'} id={'rewine-image'} src={rewineImage} />
                        <img className={'glass-image'} id={'glass-image'} src={glassImage} />
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
