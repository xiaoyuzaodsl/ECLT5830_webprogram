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
* Date : 2022/12/05 <fill in yourself>
*/
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'
import App from './App';
import { BrowserRouter,Routes,Route,Link, useMatch, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Sendmsg from "./Sendmsg";

const dataList=[
    {
      "id": "run",
      "featureImageUrl": "img/run.jpg",
      "title": "Every day 1k, Doctor run away",
      "description": "Running is good for health.",
      "detail":"According to Wikipedia, Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity. The term running can refer to any of a variety of speeds ranging from jogging to sprinting.",
    },
    {
      "id": "sunset",
      "featureImageUrl": "img/sunset.jpg",
      "title": "Praise the Sun",
      "description": "The Sun is a wondrous body. Like a magnificent father!",
      "detail":"The Sun's core fuses about 600 million tons of hydrogen into helium every second, converting 4 million tons of matter into energy every second as a result. This energy, which can take between 10,000 and 170,000 years to escape the core, is the source of the Sun's light and heat. When hydrogen fusion in its core has diminished to the point at which the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature while its outer layers expand, eventually transforming the Sun into a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury and Venus, and render Earth uninhabitable – but not for about five billion years. After this, it will shed its outer layers and become a dense type of cooling star known as a white dwarf, and no longer produce energy by fusion, but still glow and give off heat from its previous fusion.",
    },
    {
      "id": "painting",
      "featureImageUrl": "img/painting.jpg",
      "title": "Do you like drawing?",
      "description": "Painting is an important form in the visual arts",
      "detail":"Painting is the practice of applying paint, pigment, color or other medium to a solid surface (called the \"matrix\" or \"support\"). The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. In art, the term painting describes both the act and the result of the action (the final work is called \"a painting\"). The support for paintings includes such surfaces as walls, paper, canvas, wood, glass, lacquer, pottery, leaf, copper and concrete, and the painting may incorporate multiple other materials, including sand, clay, paper, plaster, gold leaf, and even whole objects.",
    },
    {
      "id": "concert",
      "featureImageUrl": "img/concert.jpg",
      "title": "Memorable Day!",
      "description": "This is the first time I went to a concert",
      "detail": "According to Wikipedia, A concert is a live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band. Concerts are held in a wide variety and size of settings, from private houses and small nightclubs, dedicated concert halls, amphitheatres and parks, to large multipurpose buildings, such as arenas and stadiums. Indoor concerts held in the largest venues are sometimes called arena concerts or amphitheatre concerts. Informal names for a concert include show and gig. Regardless of the venue, musicians usually perform on a stage (if not actual then an area of the floor designated as such). Concerts often require live event support with professional audio equipment. Before recorded music, concerts provided the main opportunity to hear musicians play. For large concerts or concert tours, the challenging logistics of arranging the musicians, venue, equipment and audience (ticket sales) are handled by professional tour promoters.",
    },
    {
      "id": "bicycles",
      "featureImageUrl": "img/bicycles.jpg",
      "title": "Olympic GO GO!",
      "description": "Bicycle seems fun",
      "detail":"According to Wikipedia, The cycling competitions of the 2020 Summer Olympics in Tokyo featured 22 events in five disciplines. The 2020 Olympics were postponed to 2021 due to the COVID-19 pandemic. Cycling competitions had been contested in every Summer Olympics programme since the first modern Olympiad in 1896 alongside athletics, artistic gymnastics, fencing and swimming. Since the 1896 contests which featured five track events and an 87 km road race from Athens to Marathon and back, Olympic cycling had gradually evolved to include women's competitions, mountain bike and BMX to arrive at the current 22 events. The cycling program for this edition was expanded with 4 more events than those held in 2016. BMX freestyle was added in the program for the first time and there will also be a return of Madison events on the track that had been removed from the Olympic program in 2008.",
    }
];

//please ensure the first character of react.component is capticalized
class Header extends React.Component{
  
  render(){
    const headerOutStyle = {height:80,width:'100%',backgroundColor:'#FFC765'};
    const headerInStyle = {fontSize:32,color:'2B1F9E'}
    //,textAlign:'center'
    return(
      <header style={headerOutStyle}>
        <div style={headerInStyle}>
          <div className='flexbox'>
            <div>
              <h1>Welcome to my blog</h1>
            </div>
            <div className='flexboxright'>
              <a href="/">
              <button id="home" type="button" className="btn btn-dark">Home</button>
              </a>
            </div>
            <div>
            <a href="/message-board">
              <button id="messageBoard" type="button" className="btn btn-dark">Message Board</button>            
            </a>
            </div>
          </div>
         
        </div>
      </header>
    );
  }
}
class PostThumbnail extends React.Component{
  constructor(){
    super();
    this.state = {mywidth:300,myheight:180};
  }
  clicker = () => this.setState({mywidth:600,myheight:360});
  render(){
    var imgStyle = {width:this.state.myscale,
      height:this.state.myheight,
      objectFit:'cover'};
    //console.log(this.props.contents);
    //console.log(this.props.contents.id);
    var detailLink = '/posts/' + this.props.contents.id;
    return (      
      <div style={{textAlign:'center'}} onClick={this.clicker}>
        <img src={this.props.contents.featureImageUrl} style={imgStyle}></img>
       <a href={detailLink}>
        <h2 style={{fontSize:20}}>{this.props.contents.title}</h2>
        </a>
        {/* <h2 style={{fontSize:20}}>{this.props.contents.title}</h2> */}
        <p style={{fontSize:3}}>{this.props.contents.description}</p>
      </div>
    );
  }
}
class Main extends React.Component{
  render(){
    const rowStyle={marginBottom:15};
    const numbers = [0,1,2,3,4];
    const PostThumbnailItems = numbers.map((number)=>
    <PostThumbnail key={number} contents={dataList[number]}></PostThumbnail>
    )
    return(
      
      <div className='container' style={{marginTop:30}}>
        <div style={rowStyle} className='row'>
          <div className='col'>{PostThumbnailItems[0]}</div>
          <div className='col'>{PostThumbnailItems[1]}</div>
        </div>

        <div style={rowStyle} className='row'>
          <div className='col'>{PostThumbnailItems[2]}</div>
          <div className='col'>{PostThumbnailItems[3]}</div>
        </div>

        <div style={rowStyle} className='row'>
          <div className='col'>{PostThumbnailItems[4]}</div>
          <div className='col'></div>
        </div>
      </div>
    );
  }
}
function Posts(){
  let name_dict = useParams();
  console.log("name dict=",name_dict);
  let myId = name_dict.picname;
  const picDetail = dataList.find(element=>element.id==myId);
  console.log(picDetail);
  return(
  <div style={{margin:40}}>
    <br/>
    <div>
      <a href="/">
      <button type="button" className="btn btn-dark">Back</button>
      </a>
    </div>
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
      <h1>{picDetail.title}</h1>
    </div>
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
      <p>{picDetail.detail}</p>
    </div>
  </div>
  );
}
class Messsageboard extends React.Component{
  render(){
    return(
      <div className="msgbox">
        <br/>
        <p>Your email address</p>
        <input id='myEmail' type="email" placeholder="example@163.com" required></input>
        <p>message</p>
        <input id='myMsg' type="text" placeholder="Good work" required></input>
        <br/>
        {/* <button type="button" className="btn btn-dark">Submit</button>
        <p>no message now</p> */}
        <Sendmsg/>
      </div>
    );
  }
}
class Homepage extends React.Component{
  render(){
    return(
      <article>
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/posts/:picname' element={<Posts/>}/>
          <Route path='/message-board' element={<Messsageboard/>}/>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        </BrowserRouter>
        {/* <Main/> */}
      </article>
    );
  }
}

export default Homepage;
// const root = ReactDOM.createRoot(document.querySelector("#app"));

// root.render(<App/>);
