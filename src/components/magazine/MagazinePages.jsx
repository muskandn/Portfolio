import React from 'react'
import Fade from 'react-reveal/Fade'
import './magazine.scss'

const MagazinePages = (props) => {
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props
  return (
    <Fade bottom>
      <section className="section__magazine-single-projects">
        <img src={imgUrl} alt="" />
        <div className="section__magazine-contents">
          <p>{name}</p>
          {/* <p className="desc">{desc}</p> */}
          
          
        </div>
      </section>
    </Fade>
  )
}

export default MagazinePages