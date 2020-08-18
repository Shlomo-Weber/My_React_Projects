import React, {Component} from 'react';
import Modal from 'react-modal'
import AddOptionModal from './AddOptionModal'

export default class AddOption extends Component {
  state = {
    error: undefined
  }
    handleAddOption = (e) => {
      e.preventDefault()
      const option = e.target.elements.option.value.trim()
      const error = this.props.handleAddOption(option)
      this.setState(()=>({ error }))
      if(!error){
        e.target.elements.option.value = ''
      }
    };
    render() {
      return (
        <div>
        { this.state.error&& <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit = {this.handleAddOption}>
              <input className="add-option__input" type="text" name="option" />
              <button className="button">Add Option</button>
              </form>
        </div>
      );
    }
  }
  

// export default class AddOption extends Component {
//   state = {
//     error: undefined,
//     show:false
//   }
//   showModal = () => {
//     this.setState({ show: true });
//   }
  
//   hideModal = () => {
//     this.setState({ show: false });
//   }
//     handleAddOption = (e) => {
//       e.preventDefault()
//       const option = e.target.elements.option.value.trim()
//       const error = this.props.handleAddOption(option)
//       this.setState(()=>({ error }))
//       if(!error){
//         e.target.elements.option.value = ''
//       }
//     };
//     render() {
//       return (
//         <main>
//         <AddOptionModal 
//         show={this.state.show} 
//         hideModal={this.hideModal} 
//         showModal={this.showModal} 
//         handleAddOption={this.handleAddOption} 
//         error={this.state.error}
//         />
//         </main>
//       );
//     }
//   }
