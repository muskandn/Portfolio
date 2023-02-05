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
              Here are some selected and challenging personal projects that I have
              worked on so far which enabled me to level up my skills to a
              fascinating point that makes me feel confident in tackling more
              difficult challenges. Here are some selected and challenging personal projects that I have
              worked on so far which makes me feel confident in tackling more
              difficult challenges.
            </p>
          </Fade>
          <Fade left>
                <a href="https://www.iiitm.ac.in/index.php/en/quick-link/abhishar" className="contact-button">
                <div>
                    <span className='bg switch__bg'></span>
                    <span className='base switch__border-color'></span>
                    <span className='text'>Abhishar v(1.0-12.0)</span>
                  </div>
                </a>
                </Fade>
          <Fade bottom>
            <p>
              Here are some selected and challenging personal projects that I have
              worked on so far which enabled me to level up my skills to a
              fascinating point that makes me feel confident in tackling more
              difficult challenges. Here are some selected and challenging personal projects that I have
              worked on so far which enabled me to level up my skills to a
              fascinating point that makes me feel confident in tackling more
              difficult challenges.
              
            </p>
          </Fade>
        </div>
        <div className="section__magazine-wrapper">
        {pages.map((project, index) => {
        return <MagazinePages {...project} key={index} 
        />})}
        </div>
    </section>
    
  )
}

// export default ProjectPage




export default MagaPage
