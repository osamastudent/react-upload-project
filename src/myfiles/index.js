import logo from './logo.svg';
import './App.css';
import './customcomponents/main.css';
import Navbar from './customcomponents/navbar';

function App() {
  var name="osama";
  var num1=50;
  // var num2=parseInt(prompt("enter num2"));
  return (
    <div className="App">
<h1 >osama</h1>
{/* {num1+num2} */}

<Navbar/>

    </div>
  );
}

export default App;
