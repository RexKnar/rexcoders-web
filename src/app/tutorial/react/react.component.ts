import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

step5=`
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hom from './components/Hom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
return (
    <div>
    <Navbar />
    <div class="container-fluid mt-5">
        <div class="row">
        <div class="col-4 mt-1">
            <img src="https://marketifythemes.net/html/cavoni/img/about/1.jpg" alt="Paris"/>
        </div>
        <div class="col-8 my-5">
            <Routes>
            <Route exact path='/' element={< Hom />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
        </div>
        </div>
    </div>


    </div>
);
}

export default App;
`;

step5b=`img {
  margin-top: 18px;
  max-width: 100%;
  max-height: 100%;
}  `;

step7=`  import React from 'react';
import './styles/Navbar.css';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return (
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul>

    )
}
export default Navbar;`;
step7b=`ul {
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


li a:hover {
  background-color: #111;
}        `;
 step8=`import React from 'react';
  import './styles/Hom.css';
  const Hom = () => {
      return (
          <div class="d-block">
              <h1 class="py-auto heading">Aneesh S P</h1>
              <div class="hrl"></div>
              {/* <h1 class="my-auto sub-heading">Creative Web Developer</h1> */}
              <div class="container my-2">
                  <div class="row">
                      <div class="col-md-12 p-0">
                          <h1 class="animate-charcter">Creative Web Developer</h1>
                      </div>
                  </div>
              </div>
              <button class="button">Get In Touch</button>
          </div>
      )
  }
  export default Hom;`;

  step8b=`.heading{
    text-transform: uppercase;
    padding-top:15%;
    font-size: 50px;
}
.animate-charcter
{
text-transform: uppercase;
background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
);
background-size: auto auto;
background-clip: border-box;
background-size: 200% auto;
color: #fff;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: textclip 2s linear infinite;
display: inline-block;
}

@keyframes textclip {
to {
    background-position: 200% center;
}
}

.hrl{
    width: 30%;
    border: none;
    height: 6px;
    background:black !important;
    margin-top: 20px;
}
.button {
    margin-top: 20px;
    background-color: #333;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.button:hover{
    background-color: white;
    color: blue;
    border: 2px solid #333;
}
`;

step9=` 
import React from 'react';
import './styles/About.css';
const About = () => {
    return (
        <div>
            <h4 className='about'>About Me</h4>
            <div class='hr'></div>
            <div class="row my-5">
                <div class="col-6 py-3 pe-5">
                    <p>Hello there! My name is <span>Alan Walker</span>. I am a graphic designer, and I'm very passionate and dedicated to my work.</p>
                    <p class="pt-3">With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                </div>
                <div class="col-6 py-3 pe-2">
                    <table>
                        <tr>
                            <th class="pe-2">Name</th>
                            <td>Aneesh S P</td>
                        </tr>
                        <tr>
                            <th class="pe-2">Address</th>
                            <td>Ave Street, New York, USA</td>
                        </tr>
                        <tr>
                            <th class="pe-2">Study</th>
                            <td>Univercity of Oxford</td>
                        </tr>
                        <tr>
                            <th class="pe-2">Degree</th>
                            <td>Master of Science</td>
                        </tr>
                        <tr>
                            <th class="pe-2">Mail</th>
                            <td>aneeshsps@gmail.com</td>
                        </tr>
                        <tr>
                            <th class="pe-2">Phone</th>
                            <td>+77 022 444 05 05</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-6 pb-3 pe-5">
                    <h5 className='about'>programming</h5>
                    <div class='hrpgm'></div>
                    <p></p>
                    <p class="content ">HMTL & CSS</p>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <progress id="file" value="32" max="100" class="progress"> 32% </progress>
                        </div>
                        <div class="flex-item-right">
                            <p>80%</p>
                        </div>
                    </div>
                    <p class="content ">PHP</p>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <progress id="file" value="32" max="100" class="progress"> 32% </progress>
                        </div>
                        <div class="flex-item-right">
                            <p>80%</p>
                        </div>
                    </div>
                    <p class="content ">JAVA</p>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <progress id="file" value="32" max="100" class="progress"> 32% </progress>
                        </div>
                        <div class="flex-item-right">
                            <p>80%</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 pb-3 pe-2">
                    <h5 className='about'>languages</h5>
                    <div class='hrpgm'></div>
                    <p></p>
                    <p class="content ">TAMIL</p>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <progress id="file" value="80" max="100" class="progress"> 32% </progress>
                        </div>
                        <div class="flex-item-right">
                            <p>80%</p>
                        </div>
                    </div>
                    <p class="content ">ENGLISH</p>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <progress id="file" value="70" max="100" class="progress"> 32% </progress>
                        </div>
                        <div class="flex-item-right">
                            <p>70%</p>
                        </div>
                    </div>
                    <p class="content ">HINDI</p>
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <progress id="file" value="50" max="100" class="progress"> 32% </progress>
                        </div>
                        <div class="flex-item-right">
                            <p>50%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
`;


step9b=` 
.about{
    text-transform: uppercase;
    letter-spacing: 4px;
    /* display: inline; */
    float: left;
}
.hr{
    display: inline-block;
    width: 77%;
    border: none;
    height: 2px;
    background:rgb(184, 170, 170) !important;
    margin-bottom: 5px;
    margin-left:20px;
}
.hrpgm{
    display: inline-block;
    width: 40%;
    border: none;
    height: 2px;
    background:rgb(184, 170, 170) !important;
    margin-bottom: 5px;
    margin-left:20px;
}
span{
    font-weight: bold;
}
th, td {
    padding-bottom: 10px;
}
td{
    padding-left: 10px;
}
.content{
    text-align: start;
    margin-bottom: 0;

}
.progress{
    --bs-progress-height: 0.5rem!important;
    --bs-progress-border-radius: 0rem!important;
    width: 80%;
    display: inline-block;
}
.flex-container {
    display: flex;
    /* flex-wrap: wrap; */
    /* font-size: 30px; */
    text-align: center;
}

.flex-item-left {
    padding-top:10px ;
    flex: 80%;
}

.flex-item-right {
    flex: 20%;
}        
`;


step10=`
import React from 'react';
import './styles/Contact.css';
const Contact = () => {
return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <h4 className='about'>get in touch</h4>
    <div class='hr'></div>
    <p></p>
    <br />
    <div class="d-flex justify-content-around ">
        <div class="p-2 border border-secondary me-3 w-100 text-center">
        <i class="fa fa-map-marker"></i>
        <p>Ave Street, New York, USA</p>
        </div>
        <div class="p-2 border border-secondary me-3 w-100 text-center">
        <i class="fa fa-envelope"></i>
        <p>hello@cavani.com</p>
        </div>
        <div class="p-2 border border-secondary w-100 text-center">
        <i class="fa fa-phone"></i>
        <p>+77 022 444 05 05</p>
        </div>
    </div>
    <div class="text-center mt-5">
        <p>Contact the author of this page:</p>

        <address>
        <div class="row">
            <div class="col-6">
            <h4>Rexknar Creative Solutions</h4>
            <a href="https://www.rexknar.com/">jim@rexknar.com</a><br />
            <a href="#">+91 8940043284</a>
            </div>
            <div class="col-6">
            <h4>RexCoders</h4>
            <a href="https://rexcoders.in/home">RexCoders.in</a><br />
            <a href="#">+91 8148025194</a>
            </div>
        </div>
        </address>

    </div>

    </div>
)
}
export default Contact;
`;

step10b=`
.about{
    text-transform: uppercase;
    letter-spacing: 4px;
    /* display: inline; */
    float: left;
}
.hr{
    display: inline-block;
    width: 70%;
    border: none;
    height: 2px;
    background:rgb(184, 170, 170) !important;
    margin-bottom: 5px;
    margin-left:20px;
}
`;
}
