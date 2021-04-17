import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import "./setting.css";
import { LeftOutlined } from "@ant-design/icons";
import PoetryInputSet from "../../components/PoetryInputSet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import action from "../../redux/action/index";
const { TextArea } = Input;
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>1</h1>;
  } else {
    return <h1>2</h1>;
  }
}
class Seting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words1:
        "朱砂|天下|杀伐|人家|韶华|风华|繁华|血染|墨染|白衣|素衣|嫁衣|倾城|孤城|空城|旧城|旧人|伊人|心疼|春风|古琴|无情|迷离|奈何|断弦|焚尽|散乱|陌路|乱世|笑靥|浅笑|明眸|轻叹|烟火|一生|三生|浮生|桃花|梨花|落花|烟花|离殇|情殇|爱殇|剑殇|灼伤|仓皇|匆忙|陌上|清商|焚香|墨香|微凉|断肠|痴狂|凄凉|黄梁|未央|成双|无恙|虚妄|凝霜|洛阳|长安|江南|忘川|千年|纸伞|烟雨|回眸|公子|红尘|红颜|红衣|红豆|红线|青丝|青史|青冢|白发|白首|白骨|黄土|黄泉|碧落|紫陌",
      words2:
        "情深缘浅|情深不寿|莫失莫忘|阴阳相隔|如花美眷|似水流年|眉目如画|曲终人散|繁华落尽|不诉离殇|一世长安",
      words3:
        "xx，xx，xx了xx。|xxxx，xxxx，不过是一场xxxx。|你说xxxx，我说xxxx，最后不过xxxx。|xx，xx，许我一场xxxx。|一x一x一xx，半x半x半xx。|你说xxxxxxxx，后来xxxxxxxx。|xxxx，xxxx，终不敌xxxx。",
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  changeData() {
    setTimeout(() => {
      this.props.action.changeData(this.state);
    }, 0);
  }
  handleChange1(e) {
    this.setState({
      words1: e.target.value,
    });

    this.changeData();
  }
  handleChange2(e) {
    this.setState({
      words2: e.target.value,
    });
    this.changeData();
  }
  handleChange3(e) {
    this.setState({
      words3: e.target.value,
    });
    this.changeData();
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="setting">
        <h1>
          古诗词生成器
          <Link to="/Home" className="backBtn">
            <LeftOutlined />
          </Link>
        </h1>
        <h2>两个字的词：</h2>
        {/* <TextArea onChange={this.handleChange} defaultValue={this.state.words1} rows={6} /> */}
        <PoetryInputSet
          myFunc={this.handleChange1}
          words={this.props.data.words1}
        ></PoetryInputSet>
        <h2>四个字的词：</h2>
        <PoetryInputSet
          myFunc={this.handleChange2}
          words={this.props.data.words2}
        ></PoetryInputSet>
        <h2>模板：</h2>
        <PoetryInputSet
          myFunc={this.handleChange3}
          words={this.props.data.words3}
        ></PoetryInputSet>
      </div>
    );
  }
}
export default connect(
  function mapStateToProps(state) {
    return {
      data: state.data,
    };
  },
  function mapActionToProps(dispatch) {
    return {
      action: bindActionCreators(action, dispatch),
    };
  }
)(Seting);
