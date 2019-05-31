import React from 'react';

import ArrowActive from './ArrowActive'

export default class FormInput extends React.Component {
    state = {
        displayArrow: false,
    };

    handleDisplayArrow = () => {
        this.setState(() => ({
            displayArrow: true
        }))
    };

    handleHideArrow = () => {
        this.setState(() => ({
            displayArrow: false
        }))
    };


    render(){
        return   (
            <div>
                <div className={'form-input-header'}>{this.props.inputTitle}</div>
                <div className={"form-input-bundle"}>
                    {this.state.displayArrow && <ArrowActive />}
                    <input
                        onFocus={this.handleDisplayArrow}
                        onBlur={this.handleHideArrow}
                        className={'form-input__input'}
                        type={"text"} name={this.props.inputName}
                        placeholder={this.props.suggestedValue}
                        onChange={this.props.handleChange}
                        id={this.props.inputName}
                    />
                </div>
            </div>
        );
    }
}

FormInput.defaultProps = {

    inputTitle: 'Fixed acidity:',
    inputName: 'acidity',
    suggestedValue: '5.00 -- 15.00'
};