import React, { Component } from 'react';
import classes from './Person.css';
import WithClasses from '../../../hoc/WithClass'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] Constructor')
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()]')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

  render() {
    console.log('[Person.js] Inside render()')
    return <WithClasses classes={classes.Person}>
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </WithClasses>
  }
}

export default Person;