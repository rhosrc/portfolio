import * as React from 'react';
import './site.css'
import { ContactUs } from '../components/contactform.js'

// import masthead from '../images/bg-masthead.jpeg'
import masthead from '../images/about.jpg'
import dex from '../images/flashcard.jpg'
import memos from '../images/swiftmemos.png'
import trakit from '../images/trakit.png'
import beanie from '../images/beaniecollect.png'


const Site = () => {
    return (
        <>
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Chris Lafortune</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">Web Developer</h2>
                        <a class="btn gray" href="#contact">Reach out</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5 about-container">
                <h1>About Me</h1>
            <img class="img-fluid headshot" src={masthead} alt="..." />
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <p>I am a web developer with a background in technology education and nonprofit program development. I'm passionate about building MERN-stack applications with intuitive, aesthetically pleasing functionality. When not coding, you can find me biking, skateboarding, writing, and curating music playlists.</p>
                        <a class="btn gray" href="https://drive.google.com/file/d/1JO9AdMKTwbPvVoTaSrTJKyz6dhLHQ0cH/view?usp=sharing">Download My Resume</a>
                    </div>
                </div>  
            </div>
        </section>
        <section class="tech-section text-center" id="about">
            <div class="container px-4 px-lg-5 about-container">
                <h1>Technologies I've Worked With</h1>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 skills-icons">
                        <div class="icon">
                        <i class="devicon-html5-plain"></i>
                            <span>HTML</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-css3-plain"></i>
                            <span>CSS3</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-javascript-plain"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-bootstrap-plain"></i>
                            <span>Bootstrap</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-react-original"></i>
                            <span>ReactJS</span>
                        </div>
                       
                        <div class="icon">
                        <i class="devicon-nodejs-plain"></i>
                            <span>NodeJS</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-express-original"></i>
                            <span>ExpressJS</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-mongodb-plain"></i>
                            <span>MongoDB</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-python-plain"></i>
                            <span>Python</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-django-plain"></i>
                            <span>Django</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-postgresql-plain"></i>
                            <span>PostgreSQL</span>
                        </div>
                        <div class="icon">
                        <i class="devicon-github-original"></i>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
        <section class="projects-section gray" id="projects">          
        <div class="container px-4 px-lg-5">
            <h1>Projects</h1>
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src={dex} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="indigo text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Flashcard Pokédex</h4>
                                    <p class="mb-0 text-white-50">A simple, clickable app for checking your favorite Pokémon entries! Coded with HTML, CSS, PokéAPI, and JavaScript/jQuery.</p>   
                                    <br />
                                    <p class="text-white"><a href="https://github.com/rhosrc/my-flashcard-pokedex">GitHub</a> | <a href="https://flashcard-pokedex.netlify.app/">Demo</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img class="img-fluid" src={trakit} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="indigo text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">TrakIt</h4>
                                    <p class="mb-0 text-white-50">Organize project details with this MERN-stack app for artists! Authenticates using Google Firebase.</p>
                                    <br />
                                    <p class="text-white"><a href="https://github.com/rhosrc/trakd-frontend">GitHub</a> | <a href="https://trakit.netlify.app/">Demo</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={beanie} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="indigo text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Beanie Collect</h4>
                                    <p class="mb-0 text-white-50"> Catalog and care for your beanie baby collection with this Django App! Styled with Materialize Design. </p>
                                    <br />
                                    <p class="text-white"><a href="https://github.com/rhosrc/Beanie-Collect">GitHub</a> | <a href="https://flashcard-pokedex.netlify.app/">Demo</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={memos} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="indigo text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">SwiftMemOS</h4>
                                    <p class="mb-0 text-white-50">A Django app for creating and accessing organizational memos. Styled with Material Design.</p>
                                    <br />
                                    <p class="text-white"><a href="https://github.com/rhosrc/swiftmemos">GitHub</a> | <a href="https://swiftmemos1.herokuapp.com/">Demo</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </section>
   
    
      
        <section class="contact-section bluish" id='contact'>
            <div>
                <h1 class='text-white'>Get in Touch with Me!</h1>
                <ContactUs />

            </div>
            <div class="container px-4 px-lg-5">
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="https://www.linkedin.com/in/chris-lafortune/"><i class="fab fa-linkedin"></i></a>
                    <a class="mx-2" href="https://github.com/rhosrc"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </section>
   
        <footer class="footer bluish small text-center text-white-50"><div class="container px-4 px-lg-5">Chris Lafortune. 2022</div></footer>
    
        </>
    )
}

export default Site;