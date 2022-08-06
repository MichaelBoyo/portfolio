
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, I'm
            <img
              src={LogoTitle}
              alt="angle brackets"
            />
            <h1>Michael Boyo</h1>
            <br />
          </h1>
          <h2>SOFTWARE ENGINEER </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
