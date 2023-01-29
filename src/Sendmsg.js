/**
* ECLT5830 Network and Web Programming
*
* I declare that the assignment here submitted is original
* except for source material explicitly acknowledged,QUESTION 1: MORE ON CLIENT-SERVER
Please put all your source code about this problem under a folder named
question_1
In this problem, we are going to solve some scenarios by modifying the our
client.js and server.js built in the lab session.
Both programs should always print their received message to the console. No extra
third-party package is allowed but you can write and import your own package if
you need.
* and that the same or closely related material has not been
* previously submitted for another course.
* I also acknowledge that I am aware of University policy and
* regulations on honesty in academic work, and of the disciplinary
* guidelines and procedures applicable to breaches of such
* policy and regulations, as contained in the website.
*
* University Guideline on Academic Honesty:
* http://www.cuhk.edu.hk/policy/academichonesty/
*
* Student Name : Li Kaixu<fill in yourself>
* Student ID : 1155180259 <fill in yourself>
* Date : 2022/12/15 <fill in yourself>
*/
import { useState,useEffect } from "react";
import "./App.css";
import { findDOMNode } from "react-dom";

function Sendmsg() {
  const [message, setMessage] = useState("Hello world...");
  const [msgboard,set_msgboard] = useState();
  useEffect(() => {
    fetch("/.netlify/functions/getmsg")
      .then((res) => res.json())
      .then((json) => set_msgboard(json))
      .catch((ex) => console.error(ex));
  }, []);
  const today = new Date();
  const myOnClick = (e) => {
    e.preventDefault();
    var element_email = document.querySelector("#myEmail");
    var element_msg=document.querySelector("#myMsg");
    
    fetch("/.netlify/functions/getmsg", {
        method: 'post',
        body: JSON.stringify({
          name:String(element_email.value),
          msg:String(element_msg.value),
          time:String(today.toLocaleString( 'sv', { timeZoneName: 'short' } ))
        })
    })
      .then((res)=>res.json())
      .then((json)=>{
        console.log("this is post",json);
        set_msgboard(json);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={myOnClick} >submit</button>
      <p>{message}</p>
      
      <div className="list">
        {msgboard?.map((msg) => (
          <div className="card" key={msg._id}>
            <div className="card-body">
              <h5 className="card-title">{msg.name}</h5>
              <p className="card-text">{msg.msg}</p>
              <p className="card-subtitle">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sendmsg;