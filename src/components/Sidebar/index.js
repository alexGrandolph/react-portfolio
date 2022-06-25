import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faGear } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      {/* <img src="skeeteroutline1.png" /> */}
      <img className="sub-logo"  src="skeetereyesxcf.png"  alt="skeeter" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4s4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4s4e" />
      </NavLink>
      <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="rgba(8, 253, 216, 0.407)" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
        <FontAwesomeIcon icon={faGear} color="#4d4s4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4s4e" />
      </NavLink>

    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/alexgrandolph/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="rgba(8, 253, 216, 0.407)" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/alexGrandolph"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="rgba(8, 253, 216, 0.407)" />
        </a>
      </li>
      </ul>
  </div>
)

export default Sidebar