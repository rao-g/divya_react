import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Contact'><li>Contact</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
