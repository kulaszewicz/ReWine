import React from 'react'
import Modal from 'react-modal'

const AboutModal = (props) => (
    <Modal
        isOpen={props.aboutModal}
        onRequestClose={(e) => {props.handleToggleModal('about')}}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        ariaHideApp={false}
        className={"modal"}
    >
        <h3 className={"modal__title"}>About project</h3>
       <p className={"modal__body"}>
           Hello, I would like to introduce<br/> ReWine App to you.<br/>
           ReWine is a simple react webapp, <br/>which is using a neural network to <br/> determine the quality of your <br/>wine.<br/>
           All you need to do is complete <br/>the form below and see the results.<br/>
           The neural network was created with the help of Brain.js library and Wine dataset that was borrowed from<br/>
           archive.ics.uci.edu/ml/datasets.
       </p>
        <button className={"button"} onClick={(e) => {props.handleToggleModal('about')}}>Okay</button>
    </Modal>
);

export default AboutModal;