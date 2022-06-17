import logo from '../img/logo.jpg'
export default function HomeView() {
  return (
    <>
      <header>
        <div className='intro-container'>
          <div className='intro-name'>SAUL</div>
          <div>
            <div className='intro-title'>Photographer</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo corrupti quia dolorum animi hic maxime est provident consequatur cumque!</p>
            <div>icon</div>
          </div>
        </div>
      </header>
      <main>
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </main>
    </>
  )
}
