import React, { Component } from "react";
class NotFound extends Component{
    constructor(props){
    super(props);
    this.props=props;
this.state={
    path: "404 404 404",
    wpath :"its not any page your route is invalid please go on valid route",
}
// this.changeError=this.changeError.bind(this);
}


changeError(){
this.setState({path : "your error has change from 404 to 505"});
}

render(){
return (
    <>

<h1>404</h1>
{this.props.not}
{this.state.path}
<>
<h1>{this.state.wpath}</h1></>
<button onClick={() => this.changeError(this)}>Change Error</button>
{/* <button onClick={this.changeError}>Change Error</button> */}
</>
);
}
}
export default NotFound;