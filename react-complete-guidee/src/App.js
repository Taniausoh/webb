import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
import person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id:'uggg', name: 'Max', age: 28 },
      { id:'rggg', name: 'Manu', age: 29 },
      { id:'fggg', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: 'false'
  };

  deletePersonHandler =(personIndex ) => {
    //const persons =this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex ,1);
    this.setState({persons:persons});
  }


  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  nameChangedHandler =(event, id )=> {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

   person.name = event.target.value;
   const  persons = [...this.state.persons];
   persons[personIndex] = person;


    this.setState({persons: persons });

  }

  render() {

    const style ={
      backgroundColor :'green',
      color :'white',
      font:'inherit',
      border:'2px solid blue',
      padding: '8px',
      cursor:'pointer',
      ':hover' :{
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    let persons: null;

    if(this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map((persons, index) =>{
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name ={persons.name}
            age ={persons.age} 
            key ={persons.id} 
            changed ={(event) => this.nameChangedHandler(event, persons.id)}/>
          })}
          </div>
      );

      style.backgroundColor ='red';
      style[':hover'] ={
        backgroundColor:'salmon',
        color: 'black'
      };
    }

  const classes=[];
    if(this.state.persons.length <=2){
      classes.push('red'); 
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style}
       // onClick={()=> this.switchNameHandler('max!!!!')}>Switch Name</button>
       onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);