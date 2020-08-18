import React, { Component } from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  
  clearOption=()=>{
    this.setState(()=>({selectedOption:undefined}))
  }
  // Pick a random option
    handlePick =()=>{
      this.setState(()=>{
        const randomOption = Math.floor(Math.random()*this.state.options.length)
        const option = (this.state.options[randomOption])
        this.setState(()=>({selectedOption:option}))
      })
    };
    // Delete all options
    handleDeleteOptions = ()=>{
      this.setState(()=> ({options:[]}))
    };

    // Delete option function
    deleteSingleOption =(optionToRemove)=>{
      this.setState((prevState)=>({
        options:prevState.options.filter((option)=> optionToRemove !==option)
      }))
    };
    
    // Add option function
    handleAddOption = (option)=>{
      if(!option){
        return 'Enter a valid value'
      }
      else if(this.state.options.indexOf(option)>-1){
        return 'This option already exists'
      }
      this.setState((prevState)=>(
        {options: prevState.options.concat(option)}
        ))  
    };

    // Pulling from local storage
    componentDidMount() {
      try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
      if(options){
        this.setState(()=>({options}))
      }
      }catch (e){
        
      }
    };
  // Saving to local storage
   componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length!==this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
        console.log('saving data')
      }
   };

    render() {
      const subtitle = 'Put your life in the hands of a computer'
      return (
        <div>
          <Header subtitle = {subtitle} 
          />
          <div className="container">
          <Action 
          hasOptions={this.state.options.length>0} 
          handlePick={this.handlePick}
          />
          <div className="widget">
          <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          deleteSingleOption={this.deleteSingleOption}
          />
          <AddOption handleAddOption={this.handleAddOption}
          />
          </div>
          </div>
          <OptionModal 
          selectedOption={this.state.selectedOption} clearOption={this.clearOption}
          />
        </div>
      );
    }
  };

export default IndecisionApp


// I want to add an importance scale for the indecision app 
// Whenyou click add option it should open a modal with a text input
// It should also have a scale of how important it is to do, and a scale of if/how badly you want to do it
// Logic to figure out how to choose which option to choose 
// If importance and desire is high, choose that. If importance is high, but want is low, random choice maybe? If want is high and importance is low, also random


// import React, { Component } from 'react';
// import AddOption, {MyModal} from './AddOption'
// import Options from './Options'
// import Header from './Header'
// import Action from './Action'
// import OptionModal from './OptionModal'

// class IndecisionApp extends Component {
//   state = {
//     options: [],
//     selectedOption: undefined
//   }

//   clearOption=()=>{
//     this.setState(()=>({selectedOption:undefined}))
//   }
//   // Pick a random option
//     handlePick =()=>{
//       this.setState(()=>{
//         const randomOption = Math.floor(Math.random()*this.state.options.length)
//         const option = (this.state.options[randomOption])
//         this.setState(()=>({selectedOption:option}))
//       })
//     };
//     // Delete all options
//     handleDeleteOptions = ()=>{
//       this.setState(()=> ({options:[]}))
//     };

//     // Delete option function
//     deleteSingleOption =(optionToRemove)=>{
//       this.setState((prevState)=>({
//         options:prevState.options.filter((option)=> optionToRemove !==option)
//       }))
//     };
    
//     // Add option function
//     handleAddOption = (option)=>{
//       if(!option){
//         return 'Enter a valid value'
//       }
//       else if(this.state.options.indexOf(option)>-1){
//         return 'This option already exists'
//       }
//       this.setState((prevState)=>(
//         {options: prevState.options.concat(option)}
//         ))  
//     };

//     // Pulling from local storage
//     componentDidMount() {
//       try{
//         const json = localStorage.getItem('options')
//         const options = JSON.parse(json)
//       if(options){
//         this.setState(()=>({options}))
//       }
//       }catch (e){
        
//       }
//     };
//   // Saving to local storage
//    componentDidUpdate(prevProps, prevState) {
//       if (prevState.options.length!==this.state.options.length){
//         const json = JSON.stringify(this.state.options)
//         localStorage.setItem('options', json)
//         console.log('saving data')
//       }
//    };

//     render() {
//       const subtitle = 'Put your life in the hands of a computer'
//       return (
//         <div>
//           <Header subtitle = {subtitle} 
//           />
//           <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}
//           />
//           <Options 
//           options={this.state.options} 
//           handleDeleteOptions={this.handleDeleteOptions}
//           deleteSingleOption={this.deleteSingleOption}
//           />
//           <AddOption handleAddOption={this.handleAddOption} hideModal={this.hideModal} showModal={this.showModal}>
//           </AddOption>
//           <OptionModal 
//           selectedOption={this.state.selectedOption} clearOption={this.clearOption}
//           />
//         </div>
//       );
//     }
//   };

// export default IndecisionApp