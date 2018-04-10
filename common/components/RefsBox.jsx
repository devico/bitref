import React from 'react' // eslint-disable-line no-unused-vars
import cookie from 'react-cookies' // eslint-disable-line no-unused-vars

import RefsList from './RefsList' // eslint-disable-line no-unused-vars
import {getTitle, generateShortUrl} from '../helpers'

export default class RefsBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleShorten = this.handleShorten.bind(this)
  }

  handleShorten(event) {
    event.preventDefault()
    const link = this.state.link
    const title = getTitle(link)
    const shortLink = generateShortUrl()
    cookie.remove('downTitleLink', {path: '/'})
    cookie.remove('downRefLink', {path: '/'})
    cookie.remove('downShortLink', {path: '/'})
    cookie.save('downTitleLink', cookie.load('topTitleLink'), {path: '/'})
    cookie.save('downRefLink', cookie.load('topRefLink'), {path: '/'})
    cookie.save('downShortLink', cookie.load('topShortLink'), {path: '/'})
    cookie.save('topRefLink', link, {path: '/'})
    cookie.save('topShortLink', shortLink, {path: '/'})
    cookie.save('topTitleLink', title, {path: '/'})
  }

  handleChange(event) {
    const link = event.target.value
    this.setState({link})
  }

  render() {
    return <div id="container" className="clearfix">
      <div className="shorten-container">
        <h1 className="page-title">HARNESS EVERY CLICK, TAP AND SWIPE.</h1>
        <div className="join-bitref">
          Brand, track and optimize every touchpoint with Bitly, the world's leading link management platform.
        </div>
        <div id="form_container" className="form-container">
          <form id="unAuthShortenForm">
            <input
              id="shorten_url"
              name="url"
              className="shorten-input"
              placeholder="Paste a link to shorten it"
              value={this.state.link}
              type="text"
              onChange={this.handleChange}
            />
            <input id="shorten_btn" className="button-ref" defaultValue="" type="submit" onClick={this.handleShorten} />
          </form>
          <div id="shorten_actions"></div>
        </div>
        <RefsList cookies={cookie.loadAll()}/>
      </div>
    </div>
  }
}
