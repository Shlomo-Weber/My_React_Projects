import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props)=>(
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.clearOption}
    closeTimeoutMS={200}
    className="modal">
        <h2 className="modal__title" >Selected Option:</h2>
        {props.selectedOption &&<h4 className="modal__body">{props.selectedOption}</h4>}
        <button className="button" onClick={props.clearOption}>Okay</button>
    </Modal>
)

export default OptionModal