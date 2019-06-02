import React from 'react'
import Modal from 'react-modal'

import circle from '../../resources/score.png'

export default class ResultModal extends React.Component {
    componentDidUpdate() {

    }

    render() {
        return (
            <Modal
                isOpen={this.props.resultModal}
                onAfterOpen={this.props.handleScoreAnimation}
                onRequestClose={(e) => {this.props.handleToggleModal('result')}}
                contentLabel="Selected Option"
                closeTimeoutMS={400}
                ariaHideApp={false}
                className={"modal modal-result"}
            >
                <h3 className={"modal__title"}>Results !</h3>
                <div className={"modal__bundle"}>
                    <h4 className={"modal__title__score"}>Score: </h4>
                    <img className={"modal__score_circle"} src={circle}/>
                    <div className={'modal__score_result'} id={'scoreNumber'}>{this.props.score}</div>
                    <div style={this.props.scoreTitleStyle} className={`modal__score_name`} id={'scoreTitle'}> {this.props.scoreTitle}</div>
                    <button onClick={this.props.handleGeekButton} className={"button button-result"}>Stats for geeks</button>
                </div>
                <button className={"button"} onClick={(e) => {this.props.handleToggleModal('result')}}>Close</button>
                <button className={"button"} onClick={(e) => {this.props.handleToggleModal('result')}}>New</button>
            </Modal>
        )
    }
};



ResultModal.defaultProps = {
    score: 8.6,
    scoreTitle: 'Very good!',
    scoreTitleStyle: {
        color: 'green'
    }
};

