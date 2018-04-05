import React from 'react' // eslint-disable-line no-unused-vars

function ShortenBox() {
  return <div id="container" className="clearfix">
    <div className="shorten-container">
      <h1 className="page-title">HARNESS EVERY CLICK, TAP AND SWIPE.</h1>
      <div className="join-bitref">
        Brand, track and optimize every touchpoint with Bitly, the world's leading link management platform.
      </div>
      <div id="form_container" className="form-container">
        <form method="POST" action="https://bitly.com/" name="shortenUrl" id="unAuthShortenForm">
          <fieldset className="cf">
            <input id="shorten_url" taborder="1" name="url" className="shorten-input" placeholder="Paste a link to shorten it" value="" type="text" />
            <input id="shorten_btn" className="button-ref" value="Shorten" type="submit" />
          </fieldset>
        </form>
        <div id="shorten_actions"></div>
      </div>
      <div class="link-container mid-container">
        <div id="shortened_info">
          <ul id="most_recent_link" class="anon_history footroom"></ul>
        </div>
        <div>
          <ul id="anon_history" class="anon_history"></ul>
        </div>
      </div>
    </div>
  </div>
}

export default ShortenBox
