import React, {useState, useRef, useEffect} from "react";
import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal"
import { useSearchParams } from "react-router-dom";
import { socialIcons } from "../../data/data";
import Blast from "../../components/BlastAnimation/Blast";
import Map from "../../components/map/Map"
import emailjs from '@emailjs/browser'

import "./contact.scss"
import { BsExclamationLg,BsPatchCheckFill } from "react-icons/bs";
const Contact=()=>{

  const [letterClass, setLetterClass] = React.useState('text-animate')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a937wz4','template_ju5vd3a', form.current,'U2MKQ3wQt4fZB4foH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return(
    <>
    <section className="contact-section " >
      <div className="fake-big">@</div>
      
        <div className="totalPage">

        <div>
        <div>
          <h2 className="contact__heading">
            <Blast letterClass={letterClass} arrayStr={["G","e","t"," ","i","n"," ","T","o","u","c","h"]} indexLetter={22}/>
            
          </h2>
          
          <Fade bottom>
            <p style={{maxWidth:"700px"}}>
            I’m interested in freelance opportunities and I am always ready
                to build projects at anytime, if you have any job offer for me,
                you could use the form below to react out to me.
            </p>
          </Fade>
        </div>
        <Fade bottom>
        <div className="social-icon-contact">
                {socialIcons.map((icons,index)=>{
                    return(
                        <a href={icons.url} key={index}>
                            {icons.icon}
                        </a>
                    )
                })}
          </div>
        </Fade>
        
        <form ref={form} onSubmit={sendEmail}>
        <Fade bottom>
          <div className="input-wrapper">
            <div className="form-input-group">
              <input 
              type="text"
              name='name'
              placeholder="Your Full Name"
              required
              />
              <span className="switch__bg"></span>
            </div>
            <div className="form-input-group">
              <input 
              type="text"
              name='phone'
              placeholder="Your Phone No"
              />
              <span className="switch__bg"></span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="form-input-group">
              <input 
              type="text"
              name='email'
              placeholder="Your Email Id"
              required 
              />
              <span className="switch__bg"></span>
            </div>
        </Fade>
        <Fade bottom>
          <div className="form-input-group">
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />     
            <span className="switch__bg"></span>   
          </div>
        </Fade>
        <Fade left>
          <button className="contact-button submit-button" type="submit">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Send Message</span>
            </div>
          </button>
        </Fade>
        </form>
        
        </div>
        <div className="google-map">
          <Map />
        </div>

       
        </div>
        <Reveal bottom>
          <footer className="footer">
            <p>&copy; copyright All Right Reserved Muskan -2023</p>
          </footer>
        </Reveal>
    </section>
    
    {/* <div>
          <h2 className="contact__heading">
            <Blast letterClass={letterClass} arrayStr={["C","o","n","t","a","c","t"," ","M","e"]} indexLetter={12}/>
            
          </h2>
          <Fade bottom>
            <p>
            I’m interested in freelance opportunities and I am always ready
                to build projects at anytime, if you have any job offer for me,
                you could use the form below to react out to me.
            </p>
          </Fade>
        </div> */}
    {/* <form ref={form} onSubmit={sendEmail}>
        <Fade bottom>
          <div className="input-wrapper">
            <div className="form-input-group">
              <input 
              type="text"
              name='name'
              placeholder="Your Full Name"
              required
              />
              <span className="switch__bg"></span>
            </div>
            <div className="form-input-group">
              <input 
              type="text"
              name='phone'
              placeholder="Your Phone No"
              />
              <span className="switch__bg"></span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="form-input-group">
              <input 
              type="text"
              name='email'
              placeholder="Your Email Id"
              required 
              />
              <span className="switch__bg"></span>
            </div>
        </Fade>
        <Fade bottom>
          <div className="form-input-group">
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />     
            <span className="switch__bg"></span>   
          </div>
        </Fade>
        <Fade bottom>
          <button className="contact-button submit-button" type="submit">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Send Message</span>
            </div>
          </button>
        </Fade>
        </form>
        <Reveal bottom>
          <footer className="footer">
            <p>&copy; copyright All Right Reserved Muskan -2023</p>
          </footer>
        </Reveal>
        <div className="google-map">
          <Map />
        </div> */}
    </>
  )
}

export default Contact