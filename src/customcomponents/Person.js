import React, {Component} from "react";

class Person extends Component{
constructor(props){
super(props);
this.props=props;

this.state={
email:"osamajanab9999@gmail.com",
address:"leamarket  baghdadi karachi.com",
}
}

changeEmail(){
 this.setState({email : "updatedEmail@gmail.com"});
}
    render(){
    return (
<>
<h1>this is classbase Person component</h1>
<h1>{this.props.kuchbhi},{this.props.time}</h1>
<h1>this is state: {this.state.email}</h1>
<button onClick={this.changeEmail.bind(this)}>change email</button>
</>

    );
    }
}

export default Person;