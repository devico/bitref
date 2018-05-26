import React from 'react'
import PropTypes from 'prop-types'

import RefsItem from './RefsItem'
import SignupPromotion from './SignupPromotion'

export default function RefsBox(props) {
  let {linkTop, linkBottom, linkInput} = props
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
            value={linkInput}
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
        { Object.keys(linkTop).length > 0
          ?
            <div>
              <RefsItem
                itemId={linkTop.shortLink}
                shortLink={`http://bit.ref/${linkTop.shortLink}`}
                title={linkTop.titleLink}
                refLink={linkTop.sourceLink}
              />
              <SignupPromotion />
            </div>
          :
            <div></div>
        }
        { Object.keys(linkBottom).length > 0
          ?
            <RefsItem
              itemId={linkBottom.shortLink}
              shortLink={`http://bit.ref/${linkBottom.shortLink}`}
              title={linkBottom.titleLink}
              refLink={linkBottom.sourceLink}
            />
          :
            <div></div>
        }
      </div>
    </div>
  </div>
}

RefsBox.propTypes = {
  linkTop: PropTypes.object,
  linkBottom: PropTypes.object,
  linkInput: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClickShorten: PropTypes.func.isRequired
}
