import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

function RefsItem(props) {
  return <li
    id={props.itemId}
    className="shortened_link list_item"
    data-user_hash={props.itemId}
    data-short_link={props.shortLink}
  >
    <div className="unauth-title">
      <a className="article-title" href={props.refLink}>{props.refLink}</a>
    </div>
    <div className="unauth-title-url">
      <a className="article-title smaller" href={props.refLink}>{props.refLink}</a>
    </div>
    <div className="unauth_capsule clearfix">
      <a className="short-url" href={props.shortLink}>{props.shortLink}</a>
      <input className="copy-input" defaultValue="short url" />
      <a href={props.shortLink} className="copy button primary">Copy</a>
      <a className="info_page" href={props.shortLink}><i className="default fa fa-bar-chart-o"></i> 0</a>
    </div>
  </li>
}

RefsItem.propTypes = {
  itemId: PT.string,
  shortLink: PT.string,
  title: PT.string,
  refLink: PT.string
}

export default RefsItem
