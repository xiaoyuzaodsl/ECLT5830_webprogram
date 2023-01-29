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
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // include bootstrap
import './index.css';
import App from './App';
import Homepage from './Homepage';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    // <App />
    <Homepage/>
);
