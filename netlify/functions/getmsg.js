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
// Reference: https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
const mongoose = require('mongoose');
const uri_msg = "mongodb+srv://admin:fujmdk491201@eclt5830.afmoxem.mongodb.net/my_asg4_db?retryWrites=true&w=majority";
mongoose.connect(uri_msg);
const Schema = mongoose.Schema;
const msgSchema = new Schema({
  name:String,
  time:String,
  msg:String
});
//const msgModel = mongoose.model('msg',msgSchema);
msgModel =  mongoose.models.msg || mongoose.model('msg', msgSchema);
db = mongoose.connection;
const post_db = db.collection('msgs');
exports.handler = async function (event, context) {

    // console.log(event)

    if (event.httpMethod === "GET") {
        // console.log("path=",event.path);
        // console.log("headers=",event.headers);
        // console.log("body=",event.body);
        var tot_doc;
        tot_doc = await msgModel.find({});
        console.log("tot_doc----",tot_doc);
        return {
            statusCode: 200,
            body: JSON.stringify(tot_doc),
        };
    }
    else if(event.httpMethod === "POST"){
        
        console.log("body=",event.body);
        // db = mongoose.connection;
        // const post_db = db.collection('msgs');
        var doc = JSON.parse(event.body);
        let temp_res;
        if(doc.name&&doc.msg){
          temp_res = await post_db.insertOne(doc);
        }
        var tot_doc;
        tot_doc = await msgModel.find({});
        console.log("tot_doc----",tot_doc);
        return {
            statusCode: 200,
            // body: JSON.stringify(JSON.parse(event.body)),
            body:JSON.stringify(tot_doc),
        }
    }
    else {
        return {
            statue: 405,
            body: "Method not supported"
        }
    }
    
};