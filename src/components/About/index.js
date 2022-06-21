import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Having working in the Mental Health and Addiction/Substance Abuse Recovery 
            fields, I learned the importance of strong communication, and empathy in interaction
            and collaboration.  Being able to work well with any one, and loving to learn
            and problem, the transition into being a software developer has been ideal.
            I am dedicated to developing high quality applications through focus on 
            Object Oriented Programming and Test Driven Development.  I am most familiar with Ruby
            and Ruby on Rails, but I am always learning something new. 
          </p>
          <p align="LEFT">
            I am always learning new things, whether it be new technologies, new recipes,
            or diving into a new book.  In my spare time I love to spend time with my corgi
            Skeeter, go skiing or golfing, or spend time with my family.
          </p>
          <p>
            If I need to define myself in one sentence that would be a driven and empathic
            human, with a never ending curiosity and drive to be the best version of myself that
            I can be. 
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">

              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <img src="/ruby_png.png"/>
              {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
            </div>
            <div className="face3">
              <img src="/rails.png" />

              {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
            </div>
            <div className="face4">
              <img src="/sql.png" />

              {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
            </div>
            <div className="face5">
              <img src="/postgresql.png" />

              {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default About
