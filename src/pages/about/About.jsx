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
        
          <div className="section-about-wrapper"  >
          <Reveal>
          <div className="fake-big" >About</div>
        </Reveal>
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
                  I'm a Computer Science Undergrad student at Indian Institute of Information Technology and Management, Gwalior.
                  </p>
                </Fade>
                <Fade bottom>
                  <p >
                  I am a passionate Full Stack Developer who loves to explore new technologies and build scalable applications. 
                  I love Automating tasks. I am also a Graphic Designer and an UI/UX designer. I love to work on Adobe PhotoShop.
                  </p>
                </Fade>
                <Fade bottom>
                  <p>
                  In love with Open Source.
                  </p>
                </Fade>
                <Fade bottom>
                  <p>
                  If I need to define myself in one sentence that would be a tech-obsessed and an Artist!!!
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
              <div >
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