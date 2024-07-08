import { LOGO_URL } from '../utils/constants'

const Header = () => {
    return (<div className='header'>
        <div className='header-logo-container'><img className='header-logo' src={LOGO_URL}></img>
        </div>
        <div className='header-nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

export default Header