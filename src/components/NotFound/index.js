// Write your code here
// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={isDarkTheme ? 'About-container-dark' : 'About-container'}
        >
          <img
            className="about-icon"
            alt="not Found"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
          />

          <h1 className={isDarkTheme ? 'about-heading-dark' : 'about-heading'}>
            Lost Your Way?
          </h1>
          <p
            className={
              isDarkTheme ? 'about-heading-dark para' : 'about-heading para'
            }
          >
            We cannot seem to find the page yoy are looking for.
          </p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
