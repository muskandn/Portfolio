import React from 'react'
import Fade from 'react-reveal/Fade'
import { pages } from './data'
import { MagazinePages } from '../../components'
import { Blast } from '../../components'
import './magazine.scss'

const MagaPage = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    
    <section className="section__magazine">
    <div className="fake-big" style={{left:'30%'}}>Magazine</div>
        <h2 aria-label="My projects" className="section__magazine-title">
          <Blast
            letterClass={letterClass}
            arrayStr={['A','b','h','i','s','h','a','r',' ','v','1','2','.','0']}
            indexLetter={12}
          />
        </h2>
        <div className="section__magazine-description" style={{maxWidth:"700px"}}>
          <Fade bottom>
            <p>
            “Abhishar”, the annual magazine of AASF, IIITM Gwalior, contains articles by students, alumni and the institute’s 
            faculty and serves as a medium to exchange ones thoughts and experiences. The highlights of the 
            happenings at the institute and insight on techno-managerial topics are the spirit of the magazine.
            </p>
          </Fade>
          <Fade left>
                <a href="https://www.aasf.in/abhishar" className="contact-button">
                <div>
                    <span className='bg switch__bg'></span>
                    <span className='base switch__border-color'></span>
                    <span className='text'>Abhishar v1.0-v12.0</span>
                  </div>
                </a>
                </Fade>
          <Fade bottom>
            <p>
            The focus of year 2023 was to celebrate 75 years of Indian Independence through Abhishar. This was also the first 
            offline launch of Abhishar after two years of virtual launches. It was certainly a spectacle to behold. I got the opportunity to work on Abhishar v12.0. The two main pages on which I have worked on:
              
            </p>
          </Fade>
        </div>
        <div className="section__magazine-wrapper">
        {pages.map((project, index) => {
        return <MagazinePages {...project} key={index} 
        />})}
        </div>
    </section>
    </>
  )
}

// export default ProjectPage




export default MagaPage
