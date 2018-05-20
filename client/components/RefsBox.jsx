import React from 'react'
import PropTypes from 'prop-types'

import RefsItem from './RefsItem'
import SignupPromotion from './SignupPromotion'

export default function RefsBox(props) {
  return <div id="container" className="clearfix">
    <div className="shorten-container">
      <h1 className="page-title">HARNESS EVERY CLICK, TAP AND SWIPE.</h1>
      <div className="join-bitref">
        <p>Brand, track and optimize every touchpoint with Bitly, the world's leading link management platform.</p>
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
            type="submit"
            value="Shorten"
            onClick={props.onClickShorten}
          />
        </form>
        <div id="shorten_actions"></div>
      </div>
      <div className="link-container mid-container">
        {Object.keys(props.links).map((key, value) => <RefsItem
          itemId={key}
          shortLink={`http://bit.ref/${key}`}
          title={value[1]}
          refLink={value[0]}
        />)
      }
      </div>
    </div>
  </div>
}

RefsBox.propTypes = {
  links: PropTypes.object,
  link: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClickShorten: PropTypes.func.isRequired
}
