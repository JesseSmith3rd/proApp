import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }
  
  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){

    }
  }

  render() {
    return (
      <div className="container">

        <div className="header">React Todo Application</div>

        <div className="btn">+</div>

        <input type="text"
          ref={((input) => {this.textInput = input})} />
          className="textInput"
          value={this.state.noteText}
          onChangeText={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />
      </div>
    );
  }
}

export default App;
