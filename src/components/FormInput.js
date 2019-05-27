import React from 'react';

export default class FormInput extends React.Component {
    render(){
        return   (
            <div>
                <div className={'form-input-header'}>{this.props.inputTitle}</div>
                <input onFocus={e => e.target.value = ''} className={'form-input__input'} type={"text"} name={this.props.inputName}  defaultValue={this.props.suggestedValue} onChange={this.props.handleChange}/>
            </div>
        );
    }
}

FormInput.defaultProps = {
    inputTitle: 'Fixed acidity:',
    inputName: 'acidity',
    suggestedValue: '5.00 -- 15.00'
};