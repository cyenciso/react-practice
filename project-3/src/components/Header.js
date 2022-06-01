import '../styles/Header.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="nav-logo" src={require('../images/rocket.png')} />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;