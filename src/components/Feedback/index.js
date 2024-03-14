import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  onClickEmoji = () => {
    this.setState(prevState => ({isEmojiClicked: !prevState.isEmojiClicked}))
  }

  renderEmojisContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list-item-container">
              <img
                src={eachEmoji.imageUrl}
                alt={eachEmoji.name}
                className="emoji"
                onClick={this.onClickEmoji}
              />
              <p className="emoji-name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfullContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-feedback">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card-container">
          {isEmojiClicked
            ? this.renderEmojisContainer()
            : this.renderSuccessfullContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
