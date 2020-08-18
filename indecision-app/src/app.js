import React from 'react';
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
  
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// class App extends React.Component {
//     state = { 
//         show: false,
//         error:undefined
//  }
  
//     showModal = () => {
//       this.setState({ show: true });
//     }
    
//     hideModal = () => {
//       this.setState({ show: false });
//     }
//     handleAddOption = (e) => {
//         e.preventDefault()
//         const option = e.target.elements.option.value.trim()
//         const error = this.props.handleAddOption(option)
//         this.setState(()=>({ error }))
//         if(!error){
//           e.target.elements.option.value = ''
//         }
//       };
//     render() {
//         let nums = []
//         for (let i=1; i<11; i++){
//             nums.push(<option key={i}>{i}</option>)
//         }
//       return (
//         <main>
//           <h1>React Modal</h1>
//           <MyModal show={this.state.show} handleClose={this.hideModal} >
//           <div>
//           { this.state.error&& <p>{this.state.error}</p>}
//           <form onSubmit = {this.handleAddOption}>
//             <input type="text" name="option"/> <br/>
            // <label htmlFor="importance">Importance:</label>
            // <select className="nums" name="importanceNums">
            // {nums}
            // </select><br/>
            // <label htmlFor="desire">Desire to do:</label>
            // <select className="nums" name="desireNums">
            // {nums}
            // </select><br/>
//                 <button onClick={this.handleClose}>Add Option</button>
//           </form>
//           </div>
//           </MyModal>
//           <button type='button' onClick={this.showModal}>Open</button>
//         </main>
//       )
//     }
//   }
  
//   const MyModal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
//     return (
//         <Modal isOpen={!!show} ariaHideApp={false}>
//       <div className={showHideClassName}>
//         <section className='modal-main'>
//           {children}
//           <button onClick={handleClose}>Close</button>
//         </section>
//       </div>
//       </Modal>
//     );
//   };
  
  
//   const container = document.createElement('div');
//   document.body.appendChild(container);
//   ReactDOM.render(<App />, container);