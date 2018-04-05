import React from 'react' // eslint-disable-line no-unused-vars

import RefsItem from './RefsItem'
import SignupPromotion from './SignupPromotion'

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

RefsListItem.propTypes = {
  itemId: PT.string.isRequired,
  shortLink: PT.string.isRequired,
  refLink: PT.string.isRequired
}

export default RefsList
