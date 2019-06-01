import React from "react";

import dataset from '../resources/winequality'
import Header from './Header'
import RewineForm from './RewineForm'
import AboutModal from './modals/AboutModal'
import ResultModal from './modals/ResultModal'
import * as Reviewer from './Reviewer'



export default class RewineApp extends React.Component {
    state = {
        aboutModal: false,
        resultModal: false,
        quality: undefined,
        neuralNetwork: undefined
    };


    handleToggleModal = (modal) => {
      this.setState((prevState) => ({
          [`${modal}Modal`] : !prevState[`${modal}Modal`]
      }))
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

    handleInitNetwork = () => {
        const trainingData = Reviewer.handleTransformDataSet(dataset);
        const net = Reviewer.handleSetNeuralNetwork(trainingData);
        this.setState(() => ({
           neuralNetwork : net
        }))
    };

    handleSetQuality = (quality) => {
        this.setState({
            quality: (quality*10).toFixed(1)
        })
    };

    handleFocus = () => {
        document.getElementById('acidity').focus();

    };

    componentDidMount() {
       this.handleFocus();
       this.handleInitNetwork()
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
                    quality = {this.state.quality}
                    handleSetQuality = {this.handleSetQuality}
                    neuralNetwork = {this.state.neuralNetwork}
                />

                <AboutModal
                    handleToggleModal = {this.handleToggleModal}
                    aboutModal = {this.state.aboutModal}
                />

                <ResultModal
                    handleScoreAnimation = {this.handleScoreAnimation}
                    handleToggleModal = {this.handleToggleModal}
                    resultModal = {this.state.resultModal}
                    score = {this.state.quality}
                />
            </div>
        )
    }
};