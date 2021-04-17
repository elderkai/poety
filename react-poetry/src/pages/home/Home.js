import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poetry: [],
      poetryNum: 10,
    };
    this.createPoetry = this.createPoetry.bind(this);
    this.setPoetryNum = this.setPoetryNum.bind(this);
  }
  setPoetryNum(value) {
    let num = value.target.value;
    if (num > 10000) {
      num = 10000;
    }
    this.setState({
      poetryNum: num,
    });
  }
  spliceText(text, data, rtext = "") {
    if (text.indexOf("xxxx") >= 0) {
      let num = Math.floor(Math.random() * data.words2.length);
      rtext = text.replace("xxxx", data.words2[num]);
      return this.spliceText(rtext, data);
    } else if (text.indexOf("xx") >= 0) {
      let num = Math.floor(Math.random() * data.words1.length);
      rtext = text.replace("xx", data.words1[num]);
      return this.spliceText(rtext, data);
    } else if (text.indexOf("x") >= 0) {
      let num = Math.floor(Math.random() * data.words1.length);
      rtext = text.replace("x", data.words1[num].split("")[0]);
      if (rtext.indexOf("x") >= 0)
        rtext = rtext.replace("x", data.words1[num].split("")[1]);
      return this.spliceText(rtext, data);
    } else {
      return text;
    }
  }
  createPoetry() {
    let words1 = this.props.data.words1.split("|");
    let words2 = this.props.data.words2.split("|");
    let words3 = this.props.data.words3.split("|");
    let array = [];
    for (var i = 0; i < this.state.poetryNum; i++) {
      let num = Math.floor(Math.random() * words3.length);
      let text = this.spliceText(words3[num], { words1, words2, words3 });
      array.push(text);
      this.setState({
        poetry: array,
      });
    }
  }
  render() {
    return (
      <div className="home">
        <h1>
          古诗词生成器
          <Link to="/Seting" className="SetBtn">
            <SettingOutlined />
          </Link>
        </h1>
        <Input
          value={this.state.poetryNum}
          type="Number"
          onChange={this.setPoetryNum}
        />
        <Button
          onClick={this.createPoetry}
          className="btnCreate"
          type="primary"
        >
          一键生成古诗词
        </Button>
        <div className="poetryList">
          <ul>
            {this.state.poetry.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default connect(function mapStateToProps(state) {
  return {
    data: state.data,
  };
})(Home);
