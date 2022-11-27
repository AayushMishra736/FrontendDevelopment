import React, { Component } from "react";

class Classcomponent extends Component{

constructor(){
    super();
    this.state = {data: 0};
}
functionCall(){
    this.setState({data:this.state.data + 1})
}
render(){
return<div>
    <h1>{this.state.data}</h1>
    <button onClick={() => this.functionCall()}>Click Me</button>
    </div>

}
}
export default Classcomponent;
