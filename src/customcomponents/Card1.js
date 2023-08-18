import React from "react";

//  const Card1 =() =>{
// return(
// <h1>this is card using const function</h1>

// );
// }

// export default Card1;



export const Card1 =(props) =>{
    return(
    <div className="card">

<h1>Web Design</h1>
<p>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites</p>
<h1>{props.name}</h1>

<h1>Web Design</h1>
<p>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites</p>


    </div>
    
    );
    }
    
    