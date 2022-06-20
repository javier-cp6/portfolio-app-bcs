import logo from '../img/logo.jpg'
export default function HomeView() {
  return (
    <>
      <header>
        <div className='intro-container'>
          <div className='intro-name'>SAUL</div>
          <div className='name-shadow'></div>
          <div>
            <div className='intro-title'>PHOTOGRAPHER</div>
            <p>Lorem ipsum dolor, sit amet consectetur. Adipisci quo quia dolorum animi hic maxime est provident consequatur cumque est provident consequatur!</p>
            <div><i className="fa-solid fa-circle-arrow-right btn-intro"></i></div>
          </div>
        </div>
      </header>
      <main>
        <div className="logo-container">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
      </main>
      <footer>
        <div className='footer-container'>
          <div>
            <p className='copyright'>© 2022 All rights reserved. Developed by Kiii Digital Solutions</p>
          </div>
          <div>
            <ul className='social-links'>
              <li><a href='/'><i className="fa-regular fa-envelope"></i></a></li>
              <li><a href='/'><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href='/'><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href='/'><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href='/'><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href='/'><i className="fa-brands fa-behance"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
