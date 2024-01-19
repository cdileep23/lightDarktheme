// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={isDarkTheme ? 'About-container-dark' : 'About-container'}
        >
          <img
            className="about-icon"
            alt="home"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
            }
          />

          <h1 className={isDarkTheme ? 'about-heading-dark' : 'about-heading'}>
            Home
          </h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
