import {
  faGitAlt,
  faGolang,
  faJava,
  faJs,
  faNode,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import myCv from './Michael_Boyo_CV.pdf'

const About = () => {
 
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <p>
            I'm very ambitious back-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <a href={myCv} className='dlod' download="Michael_Boyo_CV.pdf"> Download my Cv here </a>
        </div>
        

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNode} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGolang} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About