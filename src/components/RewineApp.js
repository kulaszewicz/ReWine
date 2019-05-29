import React from "react";
import * as fs from 'fs';

import Header from './Header'
import RewineForm from './RewineForm'
import AboutModal from './modals/AboutModal'

export default class RewineApp extends React.Component {
    state = {
      aboutModal: false
    };


    handleToggleModal = (modal) => {
      this.setState((prevState) => ({
          [`${modal}Modal`] : !prevState[`${modal}Modal`]
      }))
    };

    componentDidMount = () => {

    };

    render () {
        return (
            <div>
                <Header
                    handleToggleModal = {this.handleToggleModal}
                    aboutModal = {this.state.aboutModal}
                />


                <RewineForm />

                <AboutModal
                    handleToggleModal = {this.handleToggleModal}
                    aboutModal = {this.state.aboutModal}
                />
            </div>
        )
    }
};