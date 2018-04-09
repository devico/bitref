import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

import RefsItem from './RefsItem' // eslint-disable-line no-unused-vars
import SignupPromotion from './SignupPromotion' // eslint-disable-line no-unused-vars

function RefsList(props) {
  const {cookies} = props
  return <div className="link-container mid-container">
    <div>
      <ul id="anon_history" className="anon_history">
        <RefsItem title={cookies.topLinkTitile} refLink={cookies.topLink}/>
        <SignupPromotion />
        <RefsItem title={cookies.downLinkTitile} refLink={cookies.downLink}/>
      </ul>
    </div>
  </div>
}

RefsList.propTypes = {
  cookies: PT.object
}

export default RefsList
