import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

import RefsItem from './RefsItem' // eslint-disable-line no-unused-vars
import SignupPromotion from './SignupPromotion' // eslint-disable-line no-unused-vars

function RefsList(props) {
  return <div className="link-container mid-container">
    <div>
      <ul id="anon_history" className="anon_history">
        <RefsItem itemId={props.itemId} shortLink={props.shortLink} refLink={props.refLink}/>
        <SignupPromotion />
        <RefsItem itemId={props.itemId} shortLink={props.shortLink} refLink={props.refLink}/>
      </ul>
    </div>
  </div>
}

RefsList.propTypes = {
  itemId: PT.string,
  shortLink: PT.string,
  refLink: PT.string
}

export default RefsList
