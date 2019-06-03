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
        neuralNetwork: undefined,
        trainingProps: undefined,
        rating: [undefined, undefined]
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
           neuralNetwork : net,
        }))
    };

    handleSetQuality = (quality) => {
        this.setState({
            quality: parseFloat((quality*10).toFixed(1))
        }, () =>{
            this.handleSetRating()
        })
    };

    handleFocus = () => {
        document.getElementById('acidity').focus();

    };


    handleGeekButton = () => {
        const trainingData = Reviewer.handleTransformDataSet(dataset);
        Reviewer.handleStatsForGeeks(this.state.neuralNetwork, trainingData, this.state.trainingProps);
    };

    handleSetRating = () => {
        const quality = this.state.quality;
        let rating;

        if (quality < 5.1) {
            rating = ['Bad', {color:'#990000'}]
        } else if (quality >= 5.1 && quality < 5.7) {
            rating = ['Average', {color:'#ff9900'}]
        } else if (quality >= 5.7 && quality < 6) {
            rating = ['Above Average', {color:'#999966'}]
        } else if (quality >= 6 && quality < 6.4) {
            rating = ['Good', {color:'#99cc00'}]
        } else if (quality >= 6.4 && quality < 7) {
            rating = ['Very Good', {color:'#00cc99'}]
        }
        this.setState({
            rating: rating
        })
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
                    scoreTitle = {this.state.rating[0]}
                    scoreTitleStyle = {this.state.rating[1]}
                    handleGeekButton = {this.handleGeekButton}
                />
            </div>
        )
    }
};