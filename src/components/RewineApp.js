import React from "react";
import * as fs from 'fs';

import Header from './Header'
import RewineForm from './RewineForm'
import AboutModal from './modals/AboutModal'
import ResultModal from './modals/ResultModal'

let currentTop;

export default class RewineApp extends React.Component {
    state = {
        aboutModal: false,
        resultModal: false
    };


    handleToggleModal = (modal) => {
      this.setState((prevState) => ({
          [`${modal}Modal`] : !prevState[`${modal}Modal`]
      }))
    };

    handleBottleAnimation = () => {
        let y = window.scrollY;
        let bottle = document.getElementById('rewine-image');
        const startTop = 40;
        currentTop = startTop + (y/15);
        console.log(currentTop, y);
        bottle.style.top =  `${currentTop}%`;
    };

    handleScoreAnimation = () => {
       const score = document.getElementById('scoreNumber');
       const scoreTitle = document.getElementById('scoreTitle');
       score.classList.add('scoreAnimation');
       setTimeout(()=> {
           scoreTitle.classList.add('scoreAnimation');
           score.style.opacity = '1';
       },900);
        setTimeout(() => {
            scoreTitle.style.opacity = '1';
        }, 1900)

    };

    componentDidMount() {
        //window.addEventListener('wheel', this.handleBottleAnimation);
    };



    render () {
        return (
            <div>
                <Header
                    handleToggleModal = {this.handleToggleModal}
                    aboutModal = {this.state.aboutModal}
                />


                <RewineForm
                    handleToggleModal = {this.handleToggleModal}

                />

                <AboutModal
                    handleToggleModal = {this.handleToggleModal}
                    aboutModal = {this.state.aboutModal}
                />

                <ResultModal
                    handleScoreAnimation = {this.handleScoreAnimation}
                    handleToggleModal = {this.handleToggleModal}
                    resultModal = {this.state.resultModal}
                />
            </div>
        )
    }
};