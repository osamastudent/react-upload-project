import React, {Component} from "react";

class Practicework extends Component{
constructor(profs){
    super(profs);
this.props=profs;

this.state={
name:"osama state is working",
class:"class:12th",
}
this.changeName=this.changeName.bind(this);
}



// changeName = ()=> {

    changeName(){
    this.setState({name:'aftab changed'},()=>{
        console.log("this is rollback ",this.state);
    });
    console.log(this.state);
}

render(){

    return(
<>
<h1 >Practicework</h1>
{/* <h1>{Math.random()}</h1> */}
{/* <h1>{this.props.name}</h1>
<h1>{this.props.age}    </h1> */}
<h1>{this.state.name},{this.state.class}</h1>
{/* <button onClick={this.changeName.bind(this)}>Change name</button> */}
{/* <button onClick={()=> this.changeName(this)}>Change name</button> */}
<button onClick={this.changeName}>Change name</button>

</>

    );
}
}


export default Practicework;