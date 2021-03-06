import React from "react";
import './adeola.css';
import '../index.css'
//import { Link } from "react-router-dom";
import Nav from '../nav/nav';
import slide1 from './img/slide1.JPG';
import mobile from './img/mobile.svg';
import web from './img/web.svg';
import desktop from './img/desktop.svg';
import graphics from './img/vector.svg';
import up from './img/up-arrow.svg';
import discuss from './img/discuss.svg';
import paint from './img/paint.svg';
import developer from './img/developer.svg';
import debug from './img/debug.svg'
import launch from './img/rocket.svg'
import idea from './img/idea.svg'

class Adeola extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <div>
                <div className="w3-container w3-animate-top" id="up">
                    <Nav />
                </div>
                <div className="w3-center w3-bottom" style={{width:'50px'}}>
                    <button className="w3-btn circle w3-black w3-right"><a href="#up"><img src={up} alt="up-arrow" className="up" /></a></button>
                </div>
                <div className="w3-container w3-animate-top top">
                    <div className="w3-center w3-container">
                        <img src={slide1} alt="Me" className="widthA" />
                    </div>
                    <div className="w3-row">
                        <div className="w3-col m2 l2 w3-hide-small"><br /></div>
                        <div className="w3-col s12 m8 l8">
                            <div className="w3-container w3-padding w3-center w3-card-4 w3-round adeola">
                                <p className='w3-padding'>I'm a <b>physical science</b> enthusiast whose interest lies at an intersection of <b>telecommunications and renewable energy</b>. I seeks several ways to be innovative through technological methods and is passionate about products that make life easier for individuals at micro-scale. I'm also keen on knowledge—learning on my own and with others, and instilling knowledge to those around me; these play a key part in my good team playing abilities. My drive for progression also serves as an adaptive tool for challenges and the work environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w3-row" style={{marginTop: '150px'}}>
                        <div className="w3-center">
                            <h1><code>SERVICES</code></h1>
                        </div>
                        <div className="w3-margin-top">
                            <div className="w3-col s12 m6 l6 w3-padding">
                                <div className="w3-container w3-round w3-border w3-padding">
                                    <div className="w3-center">
                                        <img src={web} alt="web" className="svg w3-margin-top" />
                                        <div className="w3-margin-top">
                                            <p>WEBSITE DEVEVLOPMENT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m6 l6 w3-padding">
                                <div className="w3-container w3-round w3-border w3-padding">
                                    <div className="w3-center">
                                        <img src={mobile} alt="mobile" className="svg w3-margin-top" />
                                        <div className="w3-margin-top">
                                            <p>MOBILE APP DEVEVLOPMENT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m6 l6 w3-padding">
                                <div className="w3-container w3-round w3-border w3-padding">
                                    <div className="w3-center">
                                        <img src={desktop} alt="desktop" className="svg w3-margin-top" />
                                        <div className="w3-margin-top">
                                            <p>DESKTOP DEVEVLOPMENT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m6 l6 w3-padding">
                                <div className="w3-container w3-round w3-border w3-padding">
                                    <div className="w3-center">
                                        <img src={graphics} alt="graphics" className="svg w3-margin-top" />
                                        <div className="w3-margin-top">
                                            <p>GRAPHICS DESIGN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="" style={{marginTop: '150px'}}>
                        <div className="w3-center" >
                            <h1><code>WORK PROCESS</code></h1>
                        </div>
                        <div className="w3-row">
                            <div className="w3-col s12 m4 l4 w3-padding">
                                <div className="w3-container w3-padding">
                                    <div className="w3-center w3-margin-top">
                                        <img src={discuss} alt="discuss" className="work w3-margin-top" />
                                        <p className="w3-center w3-margin-top">DISCUSS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4 w3-padding">
                                <div className="w3-container w3-padding">
                                    <div className="w3-center w3-margin-top">
                                        <img src={idea} alt="idea" className="work w3-margin-top" />
                                        <p className="w3-center w3-margin-top">IDEA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4 w3-padding">
                                <div className="w3-container w3-padding">
                                    <div className="w3-center w3-margin-top">
                                        <img src={paint} alt="paint" className="work w3-margin-top" />
                                        <p className="w3-center w3-margin-top">DESIGN</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4 w3-padding">
                                <div className="w3-container w3-padding">
                                    <div className="w3-center w3-margin-top">
                                        <img src={developer} alt="develope" className="work w3-margin-top" />
                                        <p className="w3-center w3-margin-top">DEVELOP</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4 w3-padding">
                                <div className="w3-container w3-padding">
                                    <div className="w3-center w3-margin-top">
                                        <img src={debug} alt="test" className="work w3-margin-top" />
                                        <p className="w3-center w3-margin-top">DEBUG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4 w3-padding">
                                <div className="w3-container w3-padding">
                                    <div className="w3-center w3-margin-top">
                                        <img src={launch} alt="launch" className="work w3-margin-top" />
                                        <p className="w3-center w3-margin-top">LAUNCH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w3-row" style={{marginTop: '150px'}}>
                        <div className="w3-center">
                            <h1><code>AFFILIATES</code></h1>
                        </div>
                        <div className="w3-row">
                        <div className="w3-col s12 m3 l3 w3-margin-top w3-padding">
                                <div className="w3-container w3-padding w3-border">
                                    <div className="w3-center w3-margin-top">
                                        <a href="https://www.kigenni.com/" className="w3-text-blue"><b>KIGENNI</b></a>
                                    </div>
                                </div>
                        </div>
                        <div className="w3-col s12 m3 l3 w3-margin-top w3-padding">
                            <div className="w3-container w3-padding w3-border">
                                <div className="w3-center w3-margin-top">
                                    <a href="https://kortech.com.ng/" className="w3-text-black"><b>KORTECH</b></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Adeola;