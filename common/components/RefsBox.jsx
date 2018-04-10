import React from 'react'
import cookie from 'react-cookies'
import PropTypes from 'prop-types'

import RefsList from './RefsList'

export default function RefsBox(props) {
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
            value={props.link}
            type="text"
            onChange={props.onChange}
          />
          <input 
            id="shorten_btn" 
            className="button-ref" 
            defaultValue="" 
            type="submit" 
            onClick={props.onClickShorten} 
          />
        </form>
        <div id="shorten_actions"></div>
      </div>
      <RefsList cookies={props.cookies}/>
    </div>
  </div>
}

RefsBox.propTypes = {
  cookies: PropTypes.object,
  link: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClickShorten: PropTypes.func.isRequired
}