import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


// import logo from './logo.svg';
// import './App.css';
// import './customcomponents/main.css';
// import Navbar from './customcomponents/navbar';

// import Slider from './customcomponents/slider';
// import Searchbar from './customcomponents/searchbar';
// import Person from './customcomponents/Person';
// import Box from './customcomponents/Box.js';
// import {Card1} from './customcomponents/Card1';
// import Practicework from './practices/Practicework';
// import Functional from './practices/Functional';
import Navbar from './template/Navbaru';
// import slider from './template/slider';
// import tfooter from './template/footer';
import Home from './template/Home';
import About from './template/About';
import Contact from './template/contact';
import NotFound from './template/NotFound';
import Myname from "./template/Myname";
function App() {
  // var name="osama";
  // var num1=50;
  // var num2=parseInt(prompt("enter num2"));
  return (
    <Router className="App">
{/* <h1 >osama</h1> */}
{/* {num1+num2} */}

{/* <Functional name="this is functional props"/> */}
{/* <Practicework name="profs working perdectly" age="25 years old"></Practicework> */}
{/* <Practicework name="second profs working" age="20 years old"/> */}
{/* <Navbar/> */}
{/* <Slider> */}

{/* </Slider> */}

{/* <Searchbar></Searchbar> */}
{/* <Person kuchbhi="kuch bhi you can define" time="time is: 4:12"/> */}
{/* <Card1></Card1> */}
{/* <Box></Box> */}





<Navbar />
<Routes>
  <Route path="/" element={<Home ok="home page"  />}>
    
  </Route>
  
  <Route exact path="/about" element={<About name="i,am checking props"/>}></Route>
  <Route exact path="/contact" element={<Contact/>}></Route>
  <Route exact path="/myname" element={<Myname></Myname>}></Route>
    
  <Route path="*" element={<NotFound not="notontontottotn"/>}>

  </Route>
</Routes>

    </Router>
  );
}

export default App;
