// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <div
          className={isDarkTheme ? 'Navbar-container-dark' : 'Navbar-container'}
        >
          <img
            className="website-icon"
            alt="website logo"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
          />

          <ul className="ul">
            <Link
              className={isDarkTheme ? 'Link-text-dark' : 'Link-text'}
              to="/"
            >
              <li>Home</li>
            </Link>
            <Link
              className={isDarkTheme ? 'Link-text-dark' : 'Link-text'}
              to="/about"
            >
              <li>About</li>
            </Link>
          </ul>

          <button
            className="btn-toggle"
            data-testid="theme"
            type="button"
            onClick={toggleTheme}
          >
            <img
              alt="theme"
              className="theme-icon"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
