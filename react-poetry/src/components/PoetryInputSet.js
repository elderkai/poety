import React from "react";
import {Input} from "antd";
const { TextArea } = Input;
export default class PoetryInputSet extends React.Component{
    constructor(props){
        super(props)
        this.state={
            words:props.words
        }
    }
  
    render(){
        return(
            <div>
                <TextArea rows={6}  onChange={this.props.myFunc} defaultValue={this.state.words}></TextArea>
            </div>
        )
    }
}