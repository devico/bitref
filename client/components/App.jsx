import React from 'react' 
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cookie from 'react-cookies'

import {getTitle, generateShortUrl} from '../../common/helpers'
import Header from './Header'
import RefsBox from './RefsBox'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cookies: cookie.loadAll(),
      link: ''
    }

    this.generateShortenUrl = this.generateShortenUrl.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const link = event.target.value
    this.setState({link})
  }

  generateShortenUrl(event) {
    event.preventDefault()
    const link = this.state.link
    const title = getTitle(link)
    console.log(title)
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
    this.setState({
      link: '',
      cookies: cookie.loadAll()
    })
  }

  render() {
    return <div className="stage">
      <Header />
      <RefsBox 
        cookies={this.state.cookies}
        onChange={this.handleChange}
        link={this.state.link}
        onClickShorten={this.generateShortenUrl}
      />
  </div>
  }
}
