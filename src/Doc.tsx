import React, { Component } from "react";

const apiUrl = "https://rap2hpoutre.github.io/pop-noel/";
const popUrl = "http://pop.culture.gouv.fr/notice/";
const imgUrl = "https://s3.eu-west-3.amazonaws.com/pop-phototeque/";

interface Props {
  uri: string;
}

interface State {
  data?: DocData;
}

interface DocData {
  IMG: [string] | string;
  TICO: string;
  TITR: string;
  LEG: string;
}

class Doc extends Component<Props> {
  state: State = {};
  async componentDidMount() {
    const response = await fetch(`${apiUrl}${this.props.uri}.json`);
    const json = await response.json();
    this.setState({ data: json });
  }
  img(data: DocData): string {
    if (Array.isArray(data.IMG)) {
      return imgUrl + data.IMG[0];
    }
    return data.IMG;
  }
  title(data: DocData): string {
    return (data.LEG || data.TICO || data.TITR)
      .replace(/\/.*/, "")
      .replace(" : ", "\n");
  }
  render() {
    if (!this.state.data) {
      return <div />;
    }
    return (
      <div className="doc">
        <a href={popUrl + this.props.uri} target="_blank">
          <img className="frame" src={this.img(this.state.data)} />
          <div className="card">{this.title(this.state.data)}</div>
        </a>
      </div>
    );
  }
}

export default Doc;
