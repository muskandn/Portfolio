import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Sakshi from "../../assets/images/Resume_Muskan_Debnath.pdf"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"
import Blast from "../../components/BlastAnimation/Blast"
import Cards from "../../components/skillsCards/Cards"
import "./about.scss";
import ME from "../../assets/images/me3.jpeg"
import { BsColumns } from "react-icons/bs"
import { socialIcons } from "../../data/data"
const aboutArray = ["A", "b", "o", "u", "t"," ","M","e"];
const About = ()=>{
    const [letterClass, setLetterClass] = useState("text-animate");

    React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

    return (
      <>
        <Reveal>
          <div className="fake-big" style={{paddingTop:'49rem'}}>About</div>
        </Reveal>
          <div className="section-about-wrapper" >
            <article className="section-about-description">
              <div className="both">
              <div className="pad">
                <h2 aria-label="About & Skills">
                  <Blast
                    letterClass={letterClass}
                    arrayStr={aboutArray}
                    indexLetter={15}
                  />
                </h2>
                <div  className="descpt" style={{maxWidth:"700px"}}>
                <Fade bottom>
                  <p>
                    I’m an ambitious Front-End Developer who's passionate about
                    coding and looking for a role in the established IT company
                    with the opportunity to work with the latest technologies on
                    challenging and diverse projects.
                  </p>
                </Fade>
                <Fade bottom>
                  <p >
                    I’m from Ivory Coast but currently living in Nigeria. I’m a
                    freelancer who loves building cool UI effects, dynamic
                    webpages with amazing animations and creating intuitive,
                    dynamic user experiences. I also love to reach out to new
                    opportunities accross the globe that will enhance my skills
                    and get the opporutinity to work with other programmers as
                    well
                  </p>
                </Fade>
                <Fade bottom>
                  <p>
                    If I could say one of the most interesting things about me,
                    it's the fact that I'm always ready for any challenges that
                    comes to my way. Here's my CV below for more details.
                  </p>
                </Fade>
                </div>
                
                {/* <Fade left>
                  <a
                    style={{ marginTop: "2rem" }}
                    href={Sakshi}
                    download
                    className="contact-button submit-button"
                  >
                    <div>
                      <span className="bg switch__bg"></span>
                      <span className="base switch__border-color"></span>
                      <span className="text">Download CV</span>
                    </div>
                  </a>
                </Fade> */}
                <Fade left>
                <Link to={"/contact"} className="contact-button">
                  <div>
                    <span className='bg switch__bg'></span>
                    <span className='base switch__border-color'></span>
                    <span className='text'>Contact Me</span>
                  </div>
              
                </Link>
                </Fade>
                
              </div>
              <div style={{paddingTop:"6rem"}}>
                <div className="about__me about__container"  >
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>
              </div>
              <div className="social-icon-about">
                {socialIcons.map((icons,index)=>{
                    return(
                        <a href={icons.url} key={index}>
                            {icons.icon}
                        </a>
                    )
                })}
              </div>
              </div>
              
            </article>
            
          </div>
          
          
        
      </>
    );
}

export default About