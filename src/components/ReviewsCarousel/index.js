// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexPosition: 0}

  leftClick = () => {
    const {indexPosition} = this.state
    if (indexPosition > 0) {
      this.setState(prevState => ({
        indexPosition: prevState.indexPosition - 1,
      }))
    }
  }

  rightClick = () => {
    const {indexPosition} = this.state
    const {reviewsList} = this.props
    if (indexPosition < reviewsList.length - 1) {
      this.setState(prevState => ({
        indexPosition: prevState.indexPosition + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexPosition} = this.state
    const reviewItem = reviewsList[indexPosition]
    const {imgUrl, username, companyName, description} = reviewItem
    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.leftClick}
            testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            onClick={this.rightClick}
            testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
