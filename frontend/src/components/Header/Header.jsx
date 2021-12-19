import Logo from '../../pages/Landing/assets/estack-logo.png';
import House from '../../pages/Landing/assets/sell.svg'
import './Header.css'
function Header() {
    return (
        <header>
            <div className='header-container'>
            <nav className='nav'>
            <div className='logo'>
              <img src={Logo} alt='company logo'></img>        
            </div>
              <a className="link">Buy</a>
              <a className="link">Sell</a>
              <a className="link">Rent</a>
              <a className="link">About us</a>      
            </nav>
            
            <div className="advertisement">
              <div className="ad-photo">  
              <img src={House} alt='House Ad'/>    
              </div>
              <form className='search-bar'>
                <label>
                  Home is not a place it's a feeling
              
                  <input type='text'></input>    
                </label>
              </form>
            </div>
          
          </div>    
        </header>
    )
}

export default Header
