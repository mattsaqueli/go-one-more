import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import allQuotes from '../../apiCalls'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Favorites from '../Favorites/Favorites'
import AboutUs from '../AboutUs/AboutUs'
import Resources from '../Resources/Resources'
import ErrorHandling from '../ErrorHandling/ErrorHandling'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      quote: null,
      error: ''
    }
  }

  componentDidMount() {
    this.displayQuote();
  }

  displayQuote = () => {
    return allQuotes()
    .then(data => this.setState({ quote: data.quote }))
    .catch(error => {
      this.setState({ error: `${error.message}`})
    })
  }

  addFavorite = (newFav) => {
    if(!this.state.favorites.includes(newFav)) {this.setState({ favorites: [...this.state.favorites, newFav] })
    }
  }

  render() {

    return (
    <main className="App">
      <Header />
      <Switch>
      <Route 
        exact path ='/' 
        render={() => (
          <Card 
            quote={this.state.quote} 
            displayQuote={this.displayQuote}
            addFavorite={this.addFavorite}
          />
        )}
      />

      <Route 
        exact path='/favorites'
        render={() => (
          <Favorites 
            favorites={this.state.favorites} 
            /> 
          )}
      />

      <Route 
        exact path='/about'
        render={() => (
          <AboutUs /> 
          )}
      />

      <Route 
        exact path='/resources'
        render={() => (
          <Resources /> 
          )}
      />

      <Route 
        path='*'
        render={() => (
          <ErrorHandling errorMessage={this.state.error}/> 
          )}
      />
      </Switch>

    </main>
    )
  };
}

export default App;
