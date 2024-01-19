import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import ThemeContext from './context/ThemeContext'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  changeTheme = () => {
    this.setState(e => ({
      isDarkTheme: !e.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.changeTheme}}
      >
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </>
      </ThemeContext.Provider>
    )
  }
}

export default App
