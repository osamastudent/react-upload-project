import React from "react";
import { Card1 } from "./Card1";
 function Box(){
return(
       <div className="box">
<h1>box</h1>




<div className="row">
<div className="col-5">
{/* <Card1></Card1> */}
<Card1 name="i,am props and  i will be show in jis component  k name may mujhay define kiya giya hay"></Card1>
</div>


<div className="col-7">
<Card1 name="i,am props and belongs to box component"></Card1>

</div>
</div>
       </div>
);
}
export default Box;
