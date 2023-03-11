import logo from '../assets/platemate_logo_white.png'

function Header() {

    return (
      <>
        <header>
          <h1>
            PLATE MATE
          </h1>
        
          <img className='logo' src={logo} />
          
        </header>
      </>
    )
  }
  
  export default Header