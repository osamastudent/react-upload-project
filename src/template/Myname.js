import React, { Component } from "react";
class Myname extends Component{
   constructor(){
    super();
this.state={
name:"osama janab",
}
// this.buttonHandler=this.buttonHandler.bind(this);
   }

buttonHandler(){
this.setState({name:"name has changed"});

}
render(){
    return(
<>
<h1>this is myName function</h1>
<h1>{this.state.name}</h1>
<button onClick={()=>this.buttonHandler(this)}>change</button>
{/* <button onClick={this.buttonHandler}>chane</button> */}
{/* <button onClick={this.buttonHandler.bind(this)}>chane</button> */}
</>
    );
}
}
export default Myname;