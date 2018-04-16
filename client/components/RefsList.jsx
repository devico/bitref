import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

import RefsItem from './RefsItem' // eslint-disable-line no-unused-vars
import SignupPromotion from './SignupPromotion' // eslint-disable-line no-unused-vars

function RefsList(props) {
  const {cookies} = props
  return <div className="link-container mid-container">
    <div>
      <ul id="anon_history" className="anon_history">
        <RefsItem title={cookies.topTitleLink} refLink={cookies.topRefLink} shortLink={cookies.topShortLink}/>
        <SignupPromotion />
        <RefsItem title={cookies.downTitleLink} refLink={cookies.downRefLink} shortLink={cookies.downShortLink}/>
      </ul>
    </div>
  </div>
}

RefsList.propTypes = {
  cookies: PT.object
}

export default RefsList
