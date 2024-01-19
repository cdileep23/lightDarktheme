// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={isDarkTheme ? 'About-container-dark' : 'About-container'}
        >
          <img
            alt="about"
            className="about-icon"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
            }
          />

          <h1 className={isDarkTheme ? 'about-heading-dark' : 'about-heading'}>
            About
          </h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
