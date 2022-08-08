import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">My Portfolio</h1>
        <p>
          <h2 className='pt'>
            A School Management System Technology: SpringBoot (Java) Summary:
          </h2>
          <h3>
            A simple school management system where users can register, learn
            and create courses. Tested edge cases following the Test Driven
            Development Approach using Junit 5 and also performed mock tests
            with Mockito. Successfully connected the application to a MySql
            database. Tested APIs using Postman.
          </h3>

          <h2 className='pt'>A MultiUser Blog REST API with Spring Boot:</h2>
          <h3>
            Users can create account, login, add articles to blog, comment on
            blog articles and a whole lot of other functionalities.
          </h3>
          <h2 className='pt'>A mini Money management System with Django:</h2>
          <h3>
            A model of a banking application, allows users to create account,
            perform deposit, withdrawals, transfer and so on.
          </h3>
        </p>
        <h3></h3>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
