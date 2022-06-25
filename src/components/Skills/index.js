import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const TagCloud = require('TagCloud');

  const container = '.tagcloud';
  const myTags = [
    'Ruby', 'Rails', 'OOP', 'HTML',
    'CSS', 'SQL', 'Postgresql',
    'Sass', 'Bootstrap', 'API Building', 'git',
    'Heroku', 'API Consumption', 'Active Record',
    'Test Driven Development', 'Service Oriented Architecture'
  ];
  var tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

  }); 
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
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
           Starting in January 2022, I attended the Turing School 
           of Software and Design.  In August of 2022 I will have 
           completed the Back End program, earning a certificate from
           one of two nationally accredited coding bootcamps.  
           <br />
           <br />
           On my own I have begun to learn JavaScript through React.
           This portfolio website is my first React App.  I have also
           been learning node.js to familiarize myself with a JavaScript 
           back end.  I have also tinkered a little bit with Python and
           GraphQL. 
          </p>
          </div>
      </div>
      <div className="skills-storm">
        <span class="content"></span>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Skills
