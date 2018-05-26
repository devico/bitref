import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

function RefsItem(props) {
  const { itemId, shortLink, title, refLink } = props
  return <div
    id={itemId[0]}
    className="shortened_link list_item"
    data-user_hash={itemId[0]}
    data-short_link={shortLink}
  >
    <div className="unauth-title">
      <a className="article-title" href={refLink}>{title}</a>
    </div>
    <div className="unauth-title-url">
      <a className="article-title smaller" href={refLink}>{refLink}</a>
    </div>
    <div className="unauth_capsule clearfix">
      <a className="short-url" href={refLink}>{shortLink}</a>
      <input className="copy-input" defaultValue="short url" />
      <a href={refLink} className="copy button primary">Copy</a>
      <a className="info_page" href={shortLink}><i className="default fa fa-bar-chart-o"></i> 0</a>
    </div>
  </div>
}

RefsItem.propTypes = {
  itemId: PT.string,
  shortLink: PT.string,
  title: PT.string,
  refLink: PT.string
}

export default RefsItem
