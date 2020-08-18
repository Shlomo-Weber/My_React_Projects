import React from 'react';
import Modal from 'react-modal';

  const AddOptionModal = (props) => {
    let nums = []
    for (let i=1; i<11; i++){
    nums.push(<option key={i}>{i}</option>)
    }
    return (
        <div>
      <Modal isOpen={!!props.show} ariaHideApp={false} onRequestClose={props.hideModal}>
      <div>
      { props.error&& <p>{props.error}</p>}
      <form onSubmit = {props.handleAddOption}>
            <input type="text" name="option" /><br/>
            <label name="importance">Importance:</label>
            <select className="nums" name="importanceNums">
            {nums}
            </select><br/>
            <label name="desire">Desire to do:</label>
            <select className="nums" name="desireNums">
            {nums}
            </select><br/>
            <button>Add Option</button>
      </form>
      </div>
        <button onClick={props.hideModal}>Close</button>
      </Modal>
      <button type='button' onClick={props.showModal}>Add Option</button>
      </div>
    );
  };
  export default AddOptionModal

  