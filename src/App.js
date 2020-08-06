import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Example from './exmaple/example';

class App extends Component {
  state = {
    persons: [
      {name: "Anna", lastname: 'Simonova'},
      {name: "Alex", lastname: 'Yavorskiy'},
      {name: "Daniel", lastname: 'Yavorskiy'}
    ]
  };

  resetNames = () => {
    this.setState({
          persons: [
            {name: "Anna", lastname: 'Simonova'},
            {name: "Alex", lastname: 'Yavorskiy'},
            {name: "Daniel", lastname: 'Yavorskiy'}
          ]
    })
  };

  changeNames = (event) => {
    let newPersons = this.state.persons;
    newPersons.forEach((person) => {
      person.name = event.target.value;
    });
    this.setState({
      persons: newPersons
    });
  };

  changeSurnames = (event) => {
    let newPersons = this.state.persons;
    newPersons.forEach((person) => {
      person.lastname = event.target.value;
    });
    this.setState({
      persons: newPersons
    });
  };

  render() {
    const style = {
      display:'block',
      margin:'0.5rem auto'
    };

    return (
        <div>
          <button onClick={this.resetNames} style={style}>Reset names</button>
          <UserInput defName="Firstname" inputChange={this.changeNames} style={style}/>
          <UserInput defName="Lastname" inputChange={this.changeSurnames} style={style}/>
          <UserOutput name={this.state.persons[0].name} lastname={this.state.persons[0].lastname} />
          <UserOutput name={this.state.persons[1].name} lastname={this.state.persons[1].lastname}/>
          <UserOutput name={this.state.persons[2].name} lastname={this.state.persons[2].lastname}/>
          <Example/>
        </div>
    );
  }
}

export default App;
