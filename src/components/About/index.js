import { useEffect, useState } from 'react'
import {
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
   setTimeout(() => {
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
            My own journey through recovery lead me to working in the Mental 
            Health and Addiction/Substance Abuse Recovery fields.  During that time I 
            became a certified Recovery Coach, a House Manager for the Sober Living 
            that helped me, and worked with countless men and women during their journeys.
            This time of my life taught me so much.  I learned the importance of personal 
            responsibility and accountability.  I learned how to meet any one where they are
            at.  And I learned the value of strong communication, team work, and team building.
          </p>
          <p>
            During this time my life long love of problem 
            solving and technical work started to reemerge.  Which is what lead me to learning
            about software development.  After taking some free online courses, a family member
            recommended I apply for the Turing School of Software Development.  I knew it would 
            be a great challenge, but nothing I could not get through.
          </p>
          <p>
            I quickly enrolled in the Back End program, and started in January of 2022.  I 
            learned Object Oriented Programming and Test Driven Development through Ruby, leading
            to learning Ruby on Rails.  I began creating applications,
            and fell in love with the process.  I love programming because almost every day a new
            challenge comes up that I must first learn about and then solve.  At Turing I worked 
            with all sorts of increcible people, and built some amazing applications.
          </p>
          <p>
           If I am not coding you can most likely find me hanging out with my corgi Skeeter.
           Otherwise I would be reading a horror or sci-fi book, skiing, or golfing.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src="/sql.png" alt="sql" />
            </div>
            <div className="face2">
              <img src="/ruby_png.png" alt="ruby" />
            </div>
            <div className="face3">
              <img src="/rails.png" alt="rails" />
            </div>
            <div className="face4">
            </div>
            <div className="face5">
              <img src="/postgresql.png" alt="postgresql" />
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
