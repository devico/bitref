import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

function RefsItem(props) {
  return <li
    className="shortened_link list_item"
    data-user_hash="#"
    data-short_link="#"
  >
    <div className="unauth-title">
      <a className="article-title" href={props.refLink}>{props.refLink}</a>
    </div>
    <div className="unauth-title-url">
      <a className="article-title smaller" href={props.refLink}>{props.refLink}</a>
    </div>
    <div className="unauth_capsule clearfix">
      <a className="short-url" href="#">Short url</a>
      <input className="copy-input" value="short url" />
      <a href="#" className="copy button primary">Copy</a>
      <a className="info_page" href="#"><i className="default fa fa-bar-chart-o"></i> 0</a>
    </div>
  </li>
}

RefsItem.propTypes = {
  title: PT.string,
  refLink: PT.string
}

export default RefsItem
