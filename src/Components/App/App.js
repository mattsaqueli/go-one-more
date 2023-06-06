import React from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import allQuotes from '../../apiCalls';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allQuotes: []
    }
  }

  componentDidMount = () => {
    return allQuotes()
    .then(data => this.setState({ allQuotes: data }))
    .catch(error => {
      this.setState({ error: `${error.message}`})
    })
  }

  render() {
    console.log(this.state.allQuotes)
    return (
    <div className="App">
      <header className="App-header">
        <h1> go one more </h1>
      </header>
    </div>
    )
  };
}

export default App;
