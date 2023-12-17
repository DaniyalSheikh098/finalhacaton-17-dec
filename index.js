import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Myform() {
  return ( 
    <form>
      <p className="topp">Attendance App</p>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="h1login">Login Here</h1>
      <br></br>
      <br></br>
      <label className="pass">
        Email :
        <input type="text" name="email" id="email" placeholder="enter valid email"/>
      </label>
      <br></br>
      <br></br>
      <label className="pass">
        Password :
        <input type="password" placeholder="enter strong password"/>
      </label>
      <br></br>
      <br></br>
      <button className="button" type="submit">LOGIN</button>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Myform/>);

function Hi() {
  return <div className='main'>
    
   <div><p>Attendence App</p></div>
      



    </div>;
  
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));