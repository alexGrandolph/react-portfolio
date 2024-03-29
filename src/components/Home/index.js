import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import Loader from 'react-loaders'



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'l', 'e', 'x']
  const jobArray = [
    'a',
    ' ',
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',

    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (

    <>
    <div className="container home-page">
        <div class="skeeter_logo">
          <img src="wholeskeeter.png" alt="skeeter id" />
        </div>
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _14`}> </span>
        
        {/* <img src={LogoTitle} alt="developer" /> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={2}
          />
        </h1>
          <h2>Software Engineer @ <span><a className="bf-link" href="https://www.beyondfinance.com/">Beyond Finance</a></span></h2>
     
        <Link to="/contact" className="flat-button">CONTACT ME
        </Link>
      </div>

    </div>
      <Loader type="square-spin" />
    </>
  )
}
export default Home