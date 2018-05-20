import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { addLinkData, getLinks } from "../../common/helpers";
import Header from "./Header";
import RefsBox from "./RefsBox";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      links: {}
    };

    this.generateShortenUrl = this.generateShortenUrl.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const link = event.target.value;
    this.setState({ link });
  }

  generateShortenUrl(event) {
    event.preventDefault();
    const link = this.state.link;
    addLinkData(link);
    getLinks().then(links => {
      this.setState({
        link: "",
        links
      });
    });
  }

  render() {
    return (
      <div className="stage">
        <Header />
        <RefsBox
          links={this.state.links}
          link={this.state.link}
          onChange={this.handleChange}
          onClickShorten={this.generateShortenUrl}
        />
      </div>
    );
  }
}
