import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import { addLinkData, getLinks } from "../../common/helpers"
import Header from "./Header"
import RefsBox from "./RefsBox"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      linkInput: '',
      linkTop: {},
      linkBottom: {}
    }

    this.generateShortenUrl = this.generateShortenUrl.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const linkInput = event.target.value;
    this.setState({ linkInput })
  }

  generateShortenUrl(event) {
    event.preventDefault()
    const link = this.state.linkInput
    addLinkData(link)
      .then(() => getLinks())
      .then(links => {
        this.setState({
          linkInput: '',
          linkBottom: this.state.linkTop,
          linkTop: Object.keys(links).map(k => ({[k]: links[k]}))[Object.keys(links).length - 1]
        })
      })
  }

  render() {
    return (
      <div className="stage">
        <Header />
        <RefsBox
          linkTop={this.state.linkTop}
          linkBottom={this.state.linkBottom}
          linkInput={this.state.linkInput}
          onChange={this.handleChange}
          onClickShorten={this.generateShortenUrl}
        />
      </div>
    )
  }
}
