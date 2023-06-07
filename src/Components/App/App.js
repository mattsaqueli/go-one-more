import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import allQuotes from '../../apiCalls'
import Header from '../Header/Header'
import Card from '../Card/Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      isFavorited: false,
      quote: null
    }
  }

  displayQuote = () => {
    return allQuotes()
    .then(data => this.setState({ quote: data.quote }))
    .catch(error => {
      this.setState({ error: `${error.message}`})
    })
  }

  render() {
    console.log(this.state.quote)

    return (
    <main className="App">
      <Header />
      <Route 
        exact path ='/' 
        render={() => (
          <Card 
            quote={this.state.quote} 
            displayQuote={this.displayQuote}
          />
        )}
      />


    </main>
    )
  };
}

export default App;
